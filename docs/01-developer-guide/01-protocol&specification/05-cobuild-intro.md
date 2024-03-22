# CoBuild Protocol

by [Xuejie Xiao ](https://twitter.com/xxuejie), [Jan Xie ](https://twitter.com/busyforking)

*Thanks to [Quake Wang ](https://twitter.com/quakewang), [Ian Yang ](https://twitter.com/doitian) for PoCs and feedback.*

## Background

The construction of a CKB transaction involves the client processing user input, compute based on existing states, and generate new states. During the process a client needs to handle user operations, select transaction inputs, create outputs, set a reasonable fee etc. For a specific transaction, its construction, signing and broadcasting may occur on the same node or different nodes; the building process itself might involve multiple nodes working together. Therefore, CKB applications are characterized by states being generated off-chain and verified on-chain; CKB clients (e.g. wallets) are deeply involved in application transaction processing. The collaborative building process of CKB Transaction is essentially the execution process of CKB applications.

The CKB Transaction CoBuild Protocol describes an off-chain procedure for multiple parties to collaboratively create a CKB Transaction. This includes standard procedures related to transaction building (Building) and signing (Signing), as well as data exchange formats. We hope that by proposing and defining such a protocol we can lower the development barrier for CKB applications, enhance their composability with each other, improve user experience within these apps, facilitate decentralization among roles in these apps, and make it easier for those roles to collaborate.

This article will outline the objectives and design of the Transaction CoBuild Protocol, and provide specific examples for interested readers. The design and implementation of the CoBuild protocol is still in progress, we are working with community teams to build PoC and collect feedback.

## Goals

The design goals of the CKB Transaction CoBuild Protocol include:

* **Message signing**: Building a user-friendly signing standard (similar to EIP712), where users can know what action they are confirming, wallets can ensure that the message presented for user signing is consistent with the underlying transaction, and on-chain scripts can verify that the message signed by the user matches the transaction effects.
* **Script interface**: Constructing a friendly on-chain script interface standard. A type/lock script is similar to a solidity contract on Ethereum, which can define multiple actions (functions) that make up the interface of the script. When application developers interact with a CKB app, they should be able to obtain its scripts and corresponding actions through `ScriptInfo`, then construct `Message`. Given these standard procedures and data structures, automated tools can be created. Eventually developers should be able to handle `Message` without dealing with transaction data themselves, given the help of automated toolchain. This way, most of the time developers only need to deal with `ScriptInfo` / actions / `Message`, have an experience similar to handling solidity ABI / message.
* **Witness Layout**: Creating a composable and automation-friendly transaction witness layout standard, replacing existing `WitnessArgs`.
* **Transaction Building**: Providing standard procedures and data exchange format for collaborative transaction building, for both full and open transactions.
* **P2P based, Local first**: All roles in all processes should be freely joinable and selectable without permission; specific participants may take on one or more roles. We hope this will build a p2p paradigm-based [perpetual app network ](https://www.reddit.com/r/NervosNetwork/comments/1808npz/building_the_future_with_jan_xie_transcript/). (Proxy or server/client mode could solve compatibility issues in certain special scenarios but shouldn’t be included in standard procedures.)

## Roles

The process of collaborative transaction building involves the following roles:

* **Builder**: Provides the basic data needed for a transaction, such as inputs, outputs, messages or witnesse data (exclude signatures).
* **Asset Manager**: Has an understanding of assets on CKB (e.g. CKByte, xUDT, Spore), can query and display assets, provides corresponding asset operations.
* **Fee Manager**: Analyzes the on-chain fee and feerate in real time, set fee/feerate for given transactions, displays fee/feerate to users;
* **Signer**: Keeps and manages keypairs, signs data (CKB transactions or any message) upon user request.

A node in this process can take on one or more roles.

In the following chapters we will outline CoBuild protocol based on the most common scenario where CKB app takes on the role of Builder while Wallet assumes roles of Asset Manager, Fee Master and Signer. The interaction between CKB app, Wallet and User follows standard procedures.

More complex situations, like multiple builders or different participants being asset manager, fee manager, signer respectively, need to be discussed according to specific scenarios which is not covered in this article.

## Basic Flow

During the use of the CKB app by users:

1. The user clicks a button in the CKB app to initiate an operation, and the app generates a `Message` based on the user’s requested operation;
2. The app (as Builder) processes the `Message` according to its own application logic to get execution results, uses these data to build corresponding `Transaction`, reflecting user actions (Message) and corresponding execution results (inputs/outputs). The relevant `WitnessLayout` data (which includes `Message`) is placed in Transaction witness.
3. The app builds a `BuildingPacket`, puts the `Transaction` into `BuildingPacket.payload`, puts the `ScriptInfo` that `Message` depends on into `BuildingPacket.script_infos`, puts `Message` into `BuildingPacket.message`, and puts cell data corresponding to `Transaction.inputs` into `BuildingPacket.resolved_inputs`;
4. The app (as Fee Manager) calculates and sets transaction fees, updates `Transaction`. If fees can be adjusted by wallet, then set `BuildingPacket.change_output` will specify output for adjusting fee purposes.
5. The App sends `BuildingPacket` to Wallet(as Signer), requesting Wallet for signing;
6. Wallet parses `BuildingPacket`, presents `Message`, `payload`, and `script_infos` for user confirmation:
a. If User agrees: sign `BuildingPacket.payload`; fill signature into transaction witness according to `WitnessLayout` rules; broadcast fully signed transactions.
b. If User refuses: notify CKB app that signing request has been rejected.

Flowchart of Transaction Building & Signing

![ckb_message_signing_basic_flow](/assets/cobuild/ckb_message_signing_basic_flow.jpg)

## Data Schema

The core data structure used in the transaction construction process is `BuildingPacket`, and the core data structure handled by on-chain contracts is `WitnessLayout`. These two structures are linked by `Message`.

![ckb_transaction_creation.drawio](/assets/cobuild/ckb_transaction_creation.jpg)

The definitions of these data structures are as follows:

```yaml
// CKB CoBuild Data Structures
//
// WitnessLayout and BuildingPacket are two entry points: 
// - WitnessLayout is the entry point for constructing/parsing witness in on-chain scripts
// - BuildingPacket is the standard format for data exchange among parties during Transaction Co-build process
// Considering possible future upgrades, all entry structures are unions that can be extended by adding variants.

array Byte32 [byte; 32];
array Hash [byte; 32];
vector ByteVec <byte>;
vector String <byte>; // for UTF-8 encoded bytes

// A (script_info, script, action) combo
// Represents the specific action that the user wants to execute: action Y in script X of app XXX
table Action {
  script_info_hash: Byte32,   // script info
  script_hash: Byte32,        // script
  data: ByteVec,              // action data
}
vector ActionVec <Action>;

table Message {
  actions: ActionVec,
}

table ScriptInfo {
  // The dapp name and domain the script belongs to
  name: String,
  url: String,
  
  // Script info.
  // schema: script action schema
  // message_type: the entry action type used in WitnessLayout
  script_hash: Byte32,
  schema: String,
  message_type: String,
}
vector ScriptInfoVec <ScriptInfo>,

table ResolvedInputs {
  outputs: CellOutputVec,
  outputs_data: BytesVec,
}

table BuildingPacketV1 {
  // Represents user operations, contains actions
  message: Message,

  // standard CKB transaction: <https://github.com/nervosnetwork/ckb/blob/3d674d558e5574f0c77a52798775c903561a933a/util/gen-types/schemas/blockchain.mol#L66>
  // Contains the `Message`-corresponding transaction data required by wallet.
  // `Message` contains actions initiated by users, these actions will be understood and transformed into corresponding transactions (i.e., state transitions corresponding to Message) by builder and filled into BuildingPacket.payload.
  payload: Transaction,

  // resolved_inputs will store the cell data corresponding to payload transaction inputs.
  // The wallet can use this information to calculate and display the value and fees of CKByte transfer.
  resolved_inputs: ResolvedInputs,

  // Represents which output of the payload transaction is change, optional.
  // If empty, it means that the fee/feerate of this transaction is not adjustable, user must use specified fee/feerate.
  // If not empty, it indicates that the wallet can modify the capacity of the change output to adjusting tx fee/feerate.
  change_output: Uint32Opt

  // Script(info)s used by actions in message.
  script_infos: ScriptInfoVec,

  // A transaction may use multiple lock scripts, each of which may need to exchange some temporary data during the signing process (e.g. multisig).
  // Those temp data can be saved in this field. This field does not need to be signed and will not be included in the final transaction.
  lock_actions: ActionVec,
}

union BuildingPacket {
  BuildingPacketV1,
}

table SighashAll {
  // The intent of the seal is to store the "final seal" (i.e. user signature) used to finalize other parts of the transaction.
  // The seal itself can be modified by others after the transaction broadcast (malleable), and parts other than the seal are protected by it and unmodifiable (non-malleable).
  // This dedicated field helps separate data that needs to be finalized by signatures from signatures themselves, making transaction data processing easier.
  seal: ByteVec,
  message: Message,
}

table SighashAllOnly {
  seal: ByteVec,
}

// placeholder for open transactions
table OtxStart {...}
table Otx {...}

union WitnessLayout {
  SighashAll: 4278190081,
  SighashAllOnly: 4278190082,
  Otx: 4278190083,
  OtxStart: 4278190084,
}
```

## Examples

### Nervos DAO

With CoBuild we can now build an independent web UX for Nervos DAO! The [Nervos DAO type script ](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0024-ckb-genesis-script-list/0024-ckb-genesis-script-list.md#nervos-dao) has been running on mainnet for a while. In the past, only a few applications like Neuron and CKBull provide built-in access to Nervos DAO. Now we can easily build a web UX for it, as demonstrated by this [PoC ](https://ckb-dao-cobuild-poc.vercel.app/). Not only that, but we can also integrate the Nervos DAO app with JoyID, Unisat, OKX wallet or other wallets to make it more accessible for users.

If you’d like to dive in please check the code and documentation in this [repository ](https://github.com/cryptape/ckb-dao-cobuild-poc?tab=readme-ov-file).

### Spore

[Example: How To Improve Spore with CoBuild](https://talk.nervos.org/t/ckb-transaction-cobuild-protocol-overview/7702/3)

## Appendix

* [CKB Open Transaction (OTX) CoBuild Protocol Overview](https://talk.nervos.org/t/ckb-cobuild-open-transaction-otx-overview/7739)
* [CoBuild Hashes](https://talk.nervos.org/t/ckb-transaction-cobuild-protocol-overview/7702/5)
* [Lock/Type Script Validation Rules](https://talk.nervos.org/t/ckb-transaction-cobuild-protocol-overview/7702/7)
* [Custom Union Ids in WitnessLayout](https://talk.nervos.org/t/ckb-transaction-cobuild-protocol-overview/7702/9)
* [CoBuild-Only or CoBuild+Legacy](https://talk.nervos.org/t/ckb-transaction-cobuild-protocol-overview/7702/11)

*update 2024/02/16: added “Table of Content” and 4 appendixes: “CoBuild Hashes”, “Lock/Type Script Validation Rules”, “Custom Union Ids in WitnessLayout”, “CoBuild-Only or CoBuild+Legacy”.*

*update 2024/02/14: added Appendix and a link to [Open Transaction Cobuild](https://talk.nervos.org/t/ckb-cobuild-open-transaction-otx-overview/7739)*

*update 2024/02/11: added [Example: How To Improve Spore with CoBuild](https://talk.nervos.org/t/ckb-transaction-cobuild-protocol-overview/7702/3).*

*update 2024/03/15: updated lock script validation rule, now an Action object can use lock script hash as its `script_hash` value.*
# Protocol/Specification

In the blockchain ecosystem, protocols and specifications are a set of rules and standards that ensure that different applications and components can work together, and that data and transactions are secure and consistent. As a developer building blockchain applications, it is essential to understand and comply with these protocols and specifications.

## Available Protocols

### [Spore Protocol](./spore-intro)
Spore is an on-chain digital object (DOB) protocol designed to empower ownership, distribution, and value capture. As an on-chain DOB backed by CKB, Spore is engineered to embed value into on-chain contents and non-fungible tokens, establishing an intrinsic link between content and value. Spore is a Digital Object (DOB) that is not only non-fungible but also resides fully on-chain.


### [RGB++](./rgbpp-intro)
RGB++ is an extended RGB protocol by using single-use seals and client-side validation techniques to manage state changes and transaction verification. It maps the UTXO set of Bitcoin to the Cell of Nervos CKB via isomorphic bindings, and leverages scripting constraints on both CKB and Bitcoin chains to ensure the correctness of the state computations and the validity of the change ownership.


### [xUDT](./xudt-intro)
Extensible UDT(xUDT) is an extension of [Simple UDT](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0025-simple-udt/0025-simple-udt.md) for defining more behaviors a UDT might need. While simple UDT provides a minimal core for issuing UDTs on Nervos CKB, extensible UDT builds on top of simple UDT for more potential needs, such as regulations.


### [CoBuild Protocol](./cobuild-intro)
The CKB Transaction CoBuild Protocol describes an off-chain procedure for multiple parties to collaboratively create a CKB Transaction. This includes standard procedures related to transaction building (Building) and signing (Signing), as well as data exchange formats. We hope that by proposing and defining such a protocol we can lower the development barrier for CKB applications, enhance their composability with each other, improve user experience within these apps, facilitate decentralization among roles in these apps, and make it easier for those roles to collaborate.
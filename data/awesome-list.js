export const AwesomeList = [
  {
    title: "Nervos CKB Documentation",
    tag: [
      "Recommended",
      "Wallet",
      "DOB",
      "UDT",
      "Infrastructure",
      "JavaScript/TypeScript",
      "Rust",
      "Script",
      "dApp",
      "Tutorials",
    ],
    description: "Nervos CKB Documentation. Most comprehensive documentation for CKB.",
    link: "https://docs.nervos.org/",
    repo: "https://github.com/nervosnetwork/docs.nervos.org",
    llms: "https://context7.com/nervosnetwork/docs.nervos.org/llms.txt?tokens=300000",
    favicon: "https://docs.nervos.org/img/favicon.png",
    children: [
      {
        title: "OffCKB",
        tag: [
          "Recommended",
          "JavaScript/TypeScript",
          "Rust"
        ],
        description:
          "OffCKB is a local development network and toolkit for Nervos CKB. It provides full-stack dApp scaffolding, contract deployment, local devnet, REPL, and powerful CLI tools for rapid CKB development.",
        link: "https://github.com/ckb-devrel/offckb",
        llms: "https://context7.com/ckb-devrel/offckb/llms.txt"
      },
      {
        title: "Nervos CKB Core",
        tag: [
          "Recommended",
          "Rust",
          "Infrastructure"
        ],
        description:
          "Nervos CKB Core",
        link: "https://github.com/nervosnetwork/ckb",
        llms: "https://context7.com/nervosnetwork/ckb/llms.txt?tokens=100000"
      },
      {
        title: "Nervos RFCs",
        tag: [
          "Recommended",
          "Infrastructure"
        ],
        description: "Nervos Network RFCs: proposals, standards, and documentation for the Nervos ecosystem.",
        link: "https://github.com/nervosnetwork/rfcs",
        llms: "https://context7.com/nervosnetwork/rfcs/llms.txt",
      },
    ]
  },
  {
    title: "CCC Documentation",
    tag: [
      "Recommended",
      "dApp",
      "JavaScript/TypeScript",
      "Wallet",
      "API References",
      "Tutorials",
      "DOB"
    ],
    description: "Official documentation for CCC - CKBers' Codebase. Learn how to use CCC for CKB JS/TS development, explore code examples, API reference, and try the CCC Playground for hands-on experience.",
    link: "https://docs.ckbccc.com/docs/CCC",
    llms: "https://context7.com/ckb-devrel/ccc/llms.txt",
    repo: "https://github.com/ckb-devrel/ccc",
    favicon: "https://docs.ckbccc.com/img/favicon.svg",
    children: [
      {
        title: "CCC Playground",
        tag: [
          "Recommended",
          "dApp",
          "Wallet",
          "JavaScript/TypeScript",
        ],
        description: "CCC Playground is an interactive web IDE for experimenting with CCC and CKB development. Run code, visualize data, and share your experiments instantly—no setup required.",
        link: "https://live.ckbccc.com/",
        favicon: "https://docs.ckbccc.com/img/favicon.svg"
      },
      {
        title: "CCC - CKBers' Codebase",
        tag: [
          "Recommended",
          "dApp",
          "Wallet",
          "UDT",
          "DOB",
          "JavaScript/TypeScript",
        ],
        description:
          "CCC - CKBers' Codebase is a one-stop solution for your CKB JS/TS ecosystem development.",
        link: "https://github.com/ckb-devrel/ccc",
        llms: "https://context7.com/ckb-devrel/ccc/llms.txt",
      },
    ]
  },
  {
    title: "CKB Academy",
    tag: [
      "Recommended",
      "Tutorials",
      "Courses",
      "dApp",
      "Script"
    ],
    description: "CKB Academy is an interactive learning space for Nervos developers, offering courses, guides, and playgrounds to accelerate onboarding.",
    link: "https://academy.ckb.dev/",
    repo: "https://github.com/Flouse/ckb-academy",
    llms: "https://context7.com/Flouse/ckb-academy/llms.txt",
    favicon: "https://academy.ckb.dev/favicon.ico"
  },
  {
    title: "CKB JS VM",
    tag: [
      "Recommended",
      "JavaScript/TypeScript",
      "VM",
    ],
    description:
      "CKB JS VM enables writing and testing on-chain scripts for Nervos CKB in TypeScript/JavaScript. It supports ESM, modern tooling, and provides a full workflow for building, testing, and deploying CKB scripts.",
    link: "https://github.com/nervosnetwork/ckb-js-vm",
    llms: "https://context7.com/nervosnetwork/ckb-js-vm/llms.txt"
  },
  {
    title: "CKB Script Templates",
    tag: [
      "Recommended",
      "Toolchains",
      "Rust",
      "Script"
    ],
    description: "A collection of CKB script templates for native contract development, supporting Rust, C, and more. Includes ready-to-use templates and reproducible build scripts.",
    link: "https://github.com/cryptape/ckb-script-templates",
    llms: "https://context7.com/cryptape/ckb-script-templates/llms.txt",
    favicon: "https://github.com/cryptape.png"
  },
  {
    title: "ckb-std",
    tag: [
      "Recommended",
      "Script",
      "Rust",
      "API References"
    ],
    description: "Official Rust API documentation for ckb-std, a library with modules and macros to help you write CKB contracts. Includes syscalls, high-level APIs, allocators, and utilities for contract development.",
    link: "https://docs.rs/ckb-std/0.17.2/ckb_std/",
    repo: "https://github.com/nervosnetwork/ckb-std",
    llms: "https://context7.com/nervosnetwork/ckb-std/llms.txt",
    favicon: "https://docs.rs/-/rustdoc.static/favicon-32x32-6580c154.png",
  },
  {
    title: "ckb-ssri-std",
    tag: [
      "Recommended",
      "Rust",
      "API References",
      "SSRI",
    ],
    description: "Official Rust API documentation for ckb-ssri-std, a library providing utilities and traits for implementing SSRI-compliant smart contracts on Nervos CKB. Includes public traits, utility functions, and procedural macros for contract development.",
    link: "https://docs.rs/ckb-ssri-std/latest/ckb_ssri_std/",
    repo: "https://github.com/ckb-devrel/ckb-ssri-std",
    llms: "https://context7.com/ckb-devrel/ckb-ssri-std/llms.txt",
    favicon: "https://docs.rs/-/rustdoc.static/favicon-32x32-6580c154.png"
  },
  {
    title: "Spore SDK",
    tag: [
      "Recommended",
      "dApp",
      "JavaScript/TypeScript",
      "DOB"
    ],
    description: "The Ultimate TypeScript SDK for Spore Protocol. Spore SDK is a comprehensive web development kit for seamless integration with Spore, an on-chain asset protocol built on CKB. It provides composed APIs, utilities, and tools for building spore-related dApps, including encoding/decoding, transaction construction, and more.",
    link: "https://github.com/sporeprotocol/spore-sdk",
    llms: "https://context7.com/sporeprotocol/spore-sdk/llms.txt",
    favicon: "https://github.com/sporeprotocol.png"
  },
  {
    title: "ckb-sdk",
    tag: [
      "Recommended",
      "Rust",
      "dApp",
      "API References",
    ],
    description: "Official Rust API documentation for ckb-sdk, the Rust SDK for Nervos CKB. Provides modules, types, and utilities for building CKB clients, interacting with nodes, and composing transactions.",
    link: "https://docs.rs/ckb-sdk/latest/ckb_sdk/",
    repo: "https://github.com/nervosnetwork/ckb-sdk-rust",
    llms: "https://context7.com/nervosnetwork/ckb-sdk-rust/llms.txt",
    favicon: "https://docs.rs/-/rustdoc.static/favicon-32x32-6580c154.png"
  },
  {
    title: "ckb-sdk-java",
    tag: [
      "Java",
      "dApp"
    ],
    description: "Official Java SDK for Nervos CKB. Provides APIs and utilities for building, signing, and sending transactions, address generation, and interacting with CKB nodes. Open source and production-ready.",
    link: "https://github.com/nervosnetwork/ckb-sdk-java",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/ckb-sdk-java/llms.txt"
  },
  {
    title: "ckb-sdk-go",
    tag: [
      "Go",
      "dApp",
    ],
    description: "Official Go SDK for Nervos CKB. Provides APIs and utilities for building, signing, and sending transactions, address generation, and interacting with CKB nodes. Open source and production-ready.",
    link: "https://github.com/nervosnetwork/ckb-sdk-go",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/ckb-sdk-go/llms.txt"
  },
  {
    title: "CKB入门手册",
    tag: [
      "Recommended",
      "中文（Chinese）",
      "Non-Technical"
    ],
    description: "社区小伙伴整理的Nervos 生态入门手册",
    link: "https://jackylhh.notion.site/CKB-6836c451287f44cfa7c4375102f8d778",
    favicon: "https://www.notion.so/images/favicon.ico"
  },
  {
    title: "CKB Docs",
    tag: [
      "Outdated",
      "Blogs",
      "Infrastructure",
      "JavaScript/TypeScript",
      "dApp",
      "Script",
      "Lua",
      "Ruby"
    ],
    description: "This docs is for Nervos Community members. It is outdated and not maintained.",
    link: "https://docs.ckb.dev",
    repo: "https://github.com/nervoscommunity/docs",
    llms: "https://context7.com/nervoscommunity/docs/llms.txt",
    favicon: "https://docs.ckb.dev/img/favicon.ico"
  },
  {
    title: "Lumos",
    tag: [
      "Outdated",
      "JavaScript/TypeScript",
      "dApp"
    ],
    description: "Lumos is a full featured dapp framework for Nervos CKB. It is now considered outdated; use CCC for new projects. See the repo for details.",
    link: "https://github.com/ckb-js/lumos",
    llms: "https://context7.com/ckb-js/lumos/llms.txt",
    favicon: "https://github.com/ckb-js.png"
  },
  {
    title: "Cryptape Jungle Blog",
    tag: [
      "Blogs",
      "Infrastructure"
    ],
    description: "Cryptape Jungle: Research, engineering, and weekly updates on blockchain and CKB infrastructure.",
    link: "https://blog.cryptape.com/",
    favicon: "https://cdn.hashnode.com/res/hashnode/image/upload/v1640832062246/oh_gK6oio.png?w=72&h=72&fit=crop&crop=faces&auto=compress,format&format=webp"
  },
  {
    title: "CKB Light Client",
    tag: [
      "Recommended",
      "dApp",
      "Infrastructure"
    ],
    description: "Reference implementation of a CKB light client, enabling secure, efficient, and lightweight interaction, particularly within browser with WASM, with the Nervos CKB blockchain. Useful for dApps, wallets, and infrastructure services.",
    link: "https://github.com/nervosnetwork/ckb-light-client",
    llms: "https://context7.com/nervosnetwork/ckb-light-client/llms.txt",
    favicon: "https://github.com/nervosnetwork.png"
  },
  {
    title: "Nervos Talk 中文社区",
    tag: [
      "Recommended",
      "Social Media",
      "中文（Chinese）",
      "Non-Technical"
    ],
    description: "Nervos Talk 中文社区：CKB 和 Nervos 生态的主要中文论坛，涵盖技术讨论、新闻资讯、问答和社区交流。",
    link: "https://talk.nervos.org/c/chinese/45",
    favicon: "https://talk.nervos.org/uploads/default/optimized/2X/c/c4292978a632f0d8a62117254152faa824e41bdf_2_32x32.png"
  },
  {
    title: "Nervos Talk",
    tag: [
      "Recommended",
      "Social Media",
      "Non-Technical"
    ],
    description: "Nervos Talk: The forum for CKB and Nervos community discussions, news, and technical Q&A.",
    link: "https://talk.nervos.org/c/english/49",
    favicon: "https://talk.nervos.org/uploads/default/optimized/2X/c/c4292978a632f0d8a62117254152faa824e41bdf_2_32x32.png"
  },
  {
    title: "Nervos Network YouTube Channel",
    tag: [
      "Recommended",
      "Videos"
    ],
    description: "The official Nervos Network YouTube channel, featuring technical talks, ecosystem introductions, event replays, and more.",
    link: "https://www.youtube.com/@NervosNetwork",
    favicon: "https://www.youtube.com/s/desktop/e6b89e3b/img/logos/favicon.ico"
  },
  {
    title: "CKB Community Telegram（CKB中英双语社区电报群）",
    tag: [
      "Recommended",
      "Social Media",
      "Non-Technical",
      "中文（Chinese）"
    ],
    description: "CKB Community Telegram group for ecosystem news, discussion, and support. 中英双语",
    link: "https://t.me/ckb_community",
    favicon: "https://telegram.org/favicon.ico"
  },
  {
    title: "CKB/RGB++ Dev Community Telegram （中英双语）",
    tag: [
      "Recommended",
      "Social Media",
      "中文（Chinese）"
    ],
    description: "CKB/RGB++ Dev Community Telegram group for technical discussion, development Q&A, and ecosystem collaboration. 中英双语",
    link: "https://t.me/ckbdev",
    favicon: "https://telegram.org/favicon.ico"
  },
  {
    title: "Nervos Network Discord（中英双语）",
    tag: [
      "Recommended",
      "Social Media",
      "Non-Technical"
    ],
    description: "Nervos Network official Discord server for technical discussion, ecosystem news, and community support. 中英双语",
    link: "https://discord.com/invite/Yv7sYqx2fy",
    favicon: "https://www.svgrepo.com/show/353655/discord-icon.svg"
  },
  {
    title: "CKB dApps",
    tag: [
      "Recommended",
      "dApp",
    ],
    description: "CKB Dapps: A curated directory of dApps and ecosystem projects built on Nervos CKB.",
    link: "https://ckbdapps.com/",
    favicon: "https://ckbdapps.com/favicon.ico"
  },
  {
    title: "Fiber Network",
    tag: [
      "Recommended",
      "dApp",
      "Script",
      "Fiber"
    ],
    description: "Fiber Network: A scalable, privacy-by-default payment and swap network for CKB/RGB++, supporting multi-asset, cross-chain, and Lightning interoperability.",
    link: "https://www.fiber.world/",
    favicon: "https://www.fiber.world/favicon.svg"
  },
  {
    title: "Nervos Network Developers Resources Hub",
    tag: [
      "Outdated",
    ],
    description: "A comprehensive but now outdated hub of developer resources, SDKs, guides, and technical links for Nervos CKB and the Nervos Network. Includes links to docs, SDKs, economic model, consensus, programming guides, Layer2s, and more. Some links and recommendations may be deprecated. See thread for details.",
    link: "https://talk.nervos.org/t/nervos-network-developers-resources-hub/7261",
    favicon: "https://talk.nervos.org/uploads/default/optimized/2X/c/c4292978a632f0d8a62117254152faa824e41bdf_2_32x32.png"
  },
  {
    title: "Molecule",
    tag: [
      "Recommended",
      "Rust",
      "Script",
    ],
    description: "Molecule is a minimalist, canonical serialization system used in Nervos CKB. Provides schema language, code generation, and multi-language support for deterministic data structures.",
    link: "https://github.com/nervosnetwork/molecule",
    llms: "https://context7.com/nervosnetwork/molecule/llms.txt",
    favicon: "https://github.com/nervosnetwork.png"
  },
  {
    title: "moleculec-es",
    tag: [
      "dApp",
      "JavaScript/TypeScript",
      "Toolchains",
    ],
    description: "ECMAScript/TypeScript code generator for the Molecule serialization system. Enables schema-driven, canonical serialization for CKB dApps and tooling.",
    link: "https://github.com/nervosnetwork/moleculec-es",
    repo: "https://github.com/nervosnetwork/moleculec-es",
    favicon: "https://github.com/nervosnetwork.png"
  },
  {
    title: "moleculec-go",
    tag: [
      "Script",
      "Go",
      "Toolchains",
    ],
    description: "A plugin for the molecule serialization system to generate Go code from schema files. Enables Go projects to use canonical serialization for CKB and other blockchain applications. MIT licensed.",
    link: "https://github.com/driftluo/moleculec-go",
    favicon: "https://github.com/driftluo.png",
    llms: "https://context7.com/driftluo/moleculec-go/llms.txt"
  },
  {
    title: "ckb-cli",
    tag: [
      "Toolchains",
    ],
    description: "Official command line tool for Nervos CKB. Supports account management, transaction signing, wallet operations, DAO, utilities, and more.",
    link: "https://github.com/nervosnetwork/ckb-cli",
    llms: "https://context7.com/nervosnetwork/ckb-cli/llms.txt",
    favicon: "https://github.com/nervosnetwork.png"
  },
  {
    title: "ccc-deploy",
    tag: [
      "Recommended",
      "Toolchains",
    ],
    description: "CLI tool for deploying and managing scripts.",
    link: "https://github.com/ckb-devrel/ccc-deploy",
    llms: "https://context7.com/ckb-devrel/ccc-deploy/llms.txt",
    favicon: "https://github.com/ckb-devrel.png"
  },
  {
    title: "pausable-udt",
    tag: [
      "Recommended",
      "Example Project",
      "Rust",
      "Script",
      "UDT",
      "SSRI"
    ],
    description: "SSRI-compliant smart contract implementing a pausable User-Defined Token (UDT) on Nervos CKB. Supports mint, transfer, burn, and pausing via public pause lists. Fully audited, production-ready, and extensible for dApps and DeFi.",
    link: "https://github.com/Alive24/pausable-udt",
    llms: "https://context7.com/Alive24/pausable-udt/llms.txt",
    favicon: "https://github.com/Alive24.png",
  },
  {
    title: "Silent Berry",
    tag: [
      "Recommended",
      "Example Project",
      "Rust",
      "JavaScript/TypeScript",
      "Script",
      "RGB++",
      "DOB",
      "dApp"
    ],
    description: "Decentralized publishing platform based on the RGB++ protocol, enabling authors to inscribe book content onto the Bitcoin blockchain and issue multi-tier NFTs for ownership and revenue rights. Supports cross-chain, royalty sharing, and innovative digital asset models. Also showcased how to write contract with ckb-js-vm.",
    link: "https://github.com/ksleifjsslsls/silent-berry2/tree/re-js",
    favicon: "https://github.com/ksleifjsslsls.png",
    llms: "https://context7.com/ksleifjsslsls/silent-berry2/llms.txt",
  },
  {
    title: "Neuron Wallet",
    tag: [
      "Wallet",
    ],
    description: "Official Nervos CKB full-node desktop wallet. Supports CKB mainnet/testnet, sUDT, DAO, and advanced features. Cross-platform, open source, and actively maintained.",
    link: "https://github.com/nervosnetwork/neuron",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/neuron/llms.txt"
  },
  {
    title: "ckb-vm",
    tag: [
      "Rust",
      "VM",
      "Infrastructure"
    ],
    description: "Pure Rust implementation of the RISC-V virtual machine used as the scripting VM in Nervos CKB. Production-grade, open source, and supports both 32/64-bit, with ASM and interpreter modes.",
    link: "https://github.com/nervosnetwork/ckb-vm",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/ckb-vm/llms.txt"
  },
  {
    title: "ckb-explorer",
    tag: [
      "Recommended",
      "Infrastructure",
      "Ruby",
      "JavaScript/TypeScript",
    ],
    description: "Official Nervos CKB blockchain explorer. Search and visualize blocks, transactions, addresses, and on-chain data. Built with React and Ruby on Rails, open source, and production-ready.",
    link: "https://github.com/nervosnetwork/ckb-explorer",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/ckb-explorer/llms.txt",
    children: [
      {
        title: "CKB Explorer API Reference (v1)",
        tag: [
          "Recommended",
          "API Reference",
          "Infrastructure",
          "JavaScript/TypeScript"
        ],
        description: "Official CKB Explorer REST API v1 OpenAPI specification. Provides endpoints for querying blocks, transactions, addresses, SUDTs, NFTs, statistics, and more. Widely used for dApp and service integration.",
        link: "https://ckb-explorer.readme.io/openapi/64c3a08be5d2e500127a91cc",
        favicon: "https://github.com/nervosnetwork.png"
      },
      {
        title: "CKB Explorer API Reference (v2)",
        tag: [
          "Recommended",
          "API Reference",
          "Infrastructure",
          "JavaScript/TypeScript"
        ],
        description: "CKB Explorer REST API v2 OpenAPI specification. Introduces a new structure and some new endpoints, aiming for improved developer experience and future expansion. Note: Full documentation for v2 is not yet available; v1 remains the primary reference for most integrations.",
        link: "https://ckb-explorer.readme.io/openapi/64c4d30d5e5cc1000a385424",
        favicon: "https://github.com/nervosnetwork.png"
      },
    ]
  },
  {
    title: "ckb-standalone-debugger",
    tag: [
      "Recommended",
      "Rust",
      "Toolchains",
    ],
    description: "Standalone debugger and toolset for CKB smart contract development. Enables off-chain debugging, profiling, and analysis of CKB scripts. Includes command-line tools for offline contract development.",
    link: "https://github.com/nervosnetwork/ckb-standalone-debugger",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/ckb-standalone-debugger/llms.txt"
  },
  {
    title: "ckb-bitcoin-spv-contracts",
    tag: [
      "Infrastructure"
    ],
    description: "Bitcoin SPV client implementation as CKB contracts. Enables Bitcoin proof verification on CKB. Includes audit report.",
    link: "https://github.com/utxostack/ckb-bitcoin-spv-contracts",
    favicon: "https://github.com/utxostack.png",
  },
  {
    title: "capsule",
    tag: [
      "Outdated",
      "Rust",
      "Script"
    ],
    description: "Out-of-the-box development framework for creating smart contracts on Nervos CKB. Provides scaffolding, reproducible builds, and testing tools. Deprecated: use ckb-script-templates for new projects.",
    link: "https://github.com/nervosnetwork/capsule",
    llms: "https://context7.com/nervosnetwork/capsule/llms.txt",
    favicon: "https://github.com/nervosnetwork.png"
  },
  {
    title: "ckb-c-stdlib",
    tag: [
      "Script",
      "C",
    ],
    description: "Official C standard library and utilities for CKB script development. Provides CKB data structures, syscall utilities, and a tailored libc for CKB smart contracts. Usable from C, Rust (via FFI), and other languages.",
    link: "https://github.com/nervosnetwork/ckb-c-stdlib",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/ckb-c-stdlib/llms.txt"
  },
  {
    title: "force-bridge",
    tag: [
      "Infrastructure"
    ],
    description: "General cross-chain bridge for Nervos CKB, supporting asset and NFT transfers between CKB and other blockchains (e.g., Ethereum, BTC, EOS, TRON, Cardano, Polkadot). Open source, production-grade, and actively developed.",
    link: "https://github.com/nervosnetwork/force-bridge",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/force-bridge/llms.txt"
  },
  {
    title: "ckb-testtool",
    tag: [
      "Recommended",
      "Rust",
      "Script",
    ],
    description: "Helper library for writing CKB script test cases in Rust. Migrated from capsule, widely used for contract/unit testing. See docs.rs for API reference.",
    link: "https://github.com/nervosnetwork/ckb-testtool",
    favicon: "https://github.com/nervosnetwork.png",
    llms: "https://context7.com/nervosnetwork/ckb-testtool/llms.txt"
  },
  {
    title: "spore-contract",
    tag: [
      "Recommended",
      "Example Project",
      "Rust",
      "Script",
      "DOB"
    ],
    description: "Spore Protocol smart contracts for digital asset ownership, distribution, and value capture on CKB. Written in Rust. Developers are encouraged to use the Spore SDK for dApp integration.",
    link: "https://github.com/sporeprotocol/spore-contract",
    favicon: "https://github.com/sporeprotocol.png",
    llms: "https://context7.com/sporeprotocol/spore-contract/llms.txt"
  },
  {
    title: "dob-cookbook",
    tag: [
      "Recommended",
      "Example Project",
      "DOB",
      "Tutorials"
    ],
    description: "Comprehensive collection of Digital Object (DOB) protocol examples and best practices on Nervos CKB. Practical guide for DOB issuers, with implementation patterns, rendering effects, and compatibility info.",
    link: "https://github.com/sporeprotocol/dob-cookbook",
    favicon: "https://github.com/sporeprotocol.png",
    llms: "https://context7.com/sporeprotocol/dob-cookbook/llms.txt"
  },
  {
    title: "spore-docs",
    tag: [
      "Recommended",
      "Tutorials",
      "dApp",
      "JavaScript/TypeScript",
      "DOB",
    ],
    description: "Official documentation for Spore Protocol. Includes basics, tutorials, recipes, and developer resources for building with Spore and DOB on Nervos CKB.",
    link: "https://github.com/sporeprotocol/spore-docs",
    favicon: "https://github.com/sporeprotocol.png",
    llms: "https://context7.com/sporeprotocol/spore-docs/llms.txt"
  },
  {
    title: "spore-graphql",
    tag: [
      "Recommended",
      "dApp",
      "JavaScript/TypeScript",
      "DOB",
    ],
    description: "GraphQL layer for Spore Protocol, simplifying data queries and integration for dApps. Built with TypeScript, easily embeddable, supports advanced queries, and runs on Apollo GraphQL.",
    link: "https://github.com/sporeprotocol/spore-graphql",
    favicon: "https://github.com/sporeprotocol.png",
    llms: "https://context7.com/sporeprotocol/spore-graphql/llms.txt"
  },
  {
    title: "dob-decoder-standalone-server",
    tag: [
      "Recommended",
      "Rust",
      "DOB",
      "dApp",
      "Infrastructure"
    ],
    description: "Standalone server for decoding and rendering Digital Object (DOB) protocol assets on Nervos CKB. Features embedded ckb-vm executor, JSON-RPC API, decoder and render caching, and supports both code_hash and type_id decoders. Usable as a library or server for dApps and integrations.",
    link: "https://github.com/sporeprotocol/dob-decoder-standalone-server",
    favicon: "https://github.com/sporeprotocol.png",
    llms: "https://context7.com/sporeprotocol/dob-decoder-standalone-server/llms.txt"
  },
  {
    title: "spore-demo",
    tag: [
      "Recommended",
      "dApp",
      "JavaScript/TypeScript",
      "DOB",
      "Example Project",
    ],
    description: "Demo dApp for Spore Protocol built with Next.js, React, and Spore SDK. Showcases cluster creation, spore minting, transfer, and melting. Integrates MetaMask and Spore GraphQL. Great starting point for Spore-based dApp development.",
    link: "https://github.com/sporeprotocol/spore-demo",
    favicon: "https://github.com/sporeprotocol.png",
    llms: "https://context7.com/sporeprotocol/spore-demo/llms.txt"
  },
  {
    title: "ckb-lua",
    tag: [
      "Lua",
      "Script",
    ],
    description: "Enables developers to write CKB-VM scripts in Lua. Provides dynamic library and standalone loader for Lua smart contracts on Nervos CKB. Includes examples, tests, and integration guides.",
    link: "https://github.com/contrun/ckb-lua",
    favicon: "https://github.com/contrun.png",
    llms: "https://context7.com/contrun/ckb-lua/llms.txt"
  },
  {
    title: "quantum-resistant-lock-script",
    tag: [
      "C",
      "Script",
    ],
    description: "Quantum-resistant lock script for Nervos CKB using SPHINCS+. Provides tools to convert SECP256K1/blake160 locks to quantum-resistant locks, supports multiple hash types, and includes deployment/test guides.",
    link: "https://github.com/cryptape/quantum-resistant-lock-script",
    favicon: "https://github.com/cryptape.png",
    llms: "https://context7.com/cryptape/quantum-resistant-lock-script/llms.txt"
  },
  {
    title: "utxoswap-sdk-js",
    tag: [
      "Recommended",
      "JavaScript/TypeScript",
      "dApp",
      "DeFi",
    ],
    description: "UTXO Swap SDK for Nervos CKB. Provides APIs and utilities for building swap dApps, querying pools, calculating outputs, and integrating with CKB and swap backend. Includes React example and supports custom signing.",
    link: "https://github.com/UTXOSwap/utxoswap-sdk-js",
    favicon: "https://github.com/UTXOSwap.png",
    llms: "https://context7.com/UTXOSwap/utxoswap-sdk-js/llms.txt"
  },
  {
    title: "ckb-autotrader",
    tag: [
      "Recommended",
      "DeFi",
      "JavaScript/TypeScript",
      "dApp",
      "Example Project",
    ],
    description: "Generic scaffold and exemplary project for building backend and bot services for CKB projects. Modular, extensible, and demonstrates best practices for CKB-related services, including balance checking, UTXOSwap pool checking, and token redistribution.",
    link: "https://github.com/Alive24/ckb-autotrader",
    favicon: "https://github.com/Alive24.png",
    llms: "https://context7.com/Alive24/ckb-autotrader/llms.txt"
  },
  {
    title: "quantum-purse-web-static",
    tag: [
      "Recommended",
      "Wallet",
      "JavaScript/TypeScript",
      "Example Project",
    ],
    description: "Quantum Purse is a quantum-safe wallet for Nervos CKB, implemented as a static web app. Supports SPHINCS+ signatures, local encryption, light client, and multiple NIST parameter sets. Runs fully in-browser for maximum privacy and security.",
    link: "https://github.com/tea2x/quantum-purse-web-static",
    favicon: "https://github.com/tea2x.png",
    llms: "https://context7.com/tea2x/quantum-purse-web-static/llms.txt"
  },
  {
    title: "CKB.tools",
    tag: [
      "dApp",
      "JavaScript/TypeScript",
      "Toolchains",
    ],
    description: "CKB.tools is an online collection of free development tools for Nervos CKB, including address conversion, transaction builder, script hash calculator, and more. Open source, web-based, and developer-friendly.",
    link: "https://ckb.tools/",
    repo: "https://github.com/jordanmack/ckb-tools",
    favicon: "https://github.com/jordanmack.png",
    llms: "https://context7.com/jordanmack/ckb-tools/llms.txt"
  },
  {
    title: "Nervos L1 Developer Training Course",
    tag: [
      "Recommended",
      "Course",
      "Tutorials",
      "JavaScript/TypeScript",
      "Rust",
    ],
    description: "Comprehensive hands-on developer training course for Nervos CKB L1. Covers cell model, transactions, scripting, and dApp development with labs and exercises. Open source documentation and community support.",
    link: "https://nervos.gitbook.io/developer-training-course",
    repo: "https://github.com/jordanmack/developer-training-course-documentation",
    favicon: "https://github.com/jordanmack.png",
    llms: "https://context7.com/jordanmack/developer-training-course-documentation/llms.txt"
  },
  {
    title: "serde_molecule",
    tag: [
      "Recommended",
      "Rust",
      "Script"
    ],
    description: "Implementation of the Molecule serialization format using Serde for Rust. Simplifies serialization/deserialization of CKB data structures, supports no_std, big arrays, and custom types. MIT licensed.",
    link: "https://docs.rs/serde_molecule/latest/serde_molecule/index.html",
    repo: "https://github.com/XuJiandong/serde_molecule",
    favicon: "https://github.com/XuJiandong.png",
    llms: "https://context7.com/XuJiandong/serde_molecule/llms.txt"
  },
  {
    title: "iCKB",
    tag: [
      "Recommended",
      "Example Project",
      "dApp",
      "JavaScript/TypeScript",
      "Rust",
      "UDT"
    ],
    description: "iCKB is a liquid staking protocol and DApp for Nervos CKB, providing a liquid token (iCKB) that represents NervosDAO deposits. Enables fast withdrawals, audited L1 scripts, and a user-friendly web interface.",
    link: "https://ickb.org/",
    repo: "https://github.com/ickb/contracts",
    favicon: "https://github.com/ickb.png",
    llms: "https://context7.com/ickb/contracts/llms.txt"
  },
  {
    title: "Nerv DAO",
    tag: [
      "Recommended",
      "Example Project",
      "dApp",
      "Wallet",
      "UDT"
    ],
    description: "Nerv DAO is a universal wallet-interfaced Nervos DAO portal. Provides a user-friendly interface for CKB holders to deposit, manage, and withdraw from Nervos DAO using various wallets (MetaMask, JoyID, OKX, Unisat, etc). Open source, modern UI, and supports both mainnet and testnet.",
    link: "https://www.nervdao.com/",
    repo: "https://github.com/ckb-devrel/nervdao",
    favicon: "https://github.com/ckb-devrel.png",
    llms: "https://context7.com/ckb-devrel/nervdao/llms.txt"
  },
]
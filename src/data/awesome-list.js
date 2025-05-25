export const AwesomeList = [
  {
    title: "Nervos CKB Documentation",
    tag: [
      "Recommended",
      "Wallet",
      "DOB",
      "UDT",
      "Infrastructure",
      "TypeScript",
      "JavaScript",
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
          "TypeScript",
          "JavaScript",
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
      "TypeScript",
      "JavaScript",
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
          "TypeScript",
          "JavaScript"
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
          "TypeScript",
          "JavaScript",
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
      "TypeScript",
      "JavaScript",
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
      "TypeScript",
      "JavaScript",
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
      "API References",
    ],
    description: "Official Rust API documentation for ckb-sdk, the Rust SDK for Nervos CKB. Provides modules, types, and utilities for building CKB clients, interacting with nodes, and composing transactions.",
    link: "https://docs.rs/ckb-sdk/latest/ckb_sdk/",
    repo: "https://github.com/nervosnetwork/ckb-sdk-rust",
    llms: "https://context7.com/nervosnetwork/ckb-sdk-rust/llms.txt",
    favicon: "https://docs.rs/-/rustdoc.static/favicon-32x32-6580c154.png"
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
      "Documentation",
      "Blogs",
      "Infrastructure",
      "JavaScript",
      "TypeScript",
      "dApp",
      "Script",
      "Other Languages",
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
      "JavaScript",
      "TypeScript",
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
      "Forum",
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
      "Forum",
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
    title: "CKB Dapps",
    tag: [
      "Recommended",
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
]
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
          "Rust",
          "Infrastructure"
        ],
        description:
          "Nervos CKB Core",
        link: "https://github.com/nervosnetwork/ckb",
        llms: "https://context7.com/nervosnetwork/ckb/llms.txt?tokens=100000"
      },
    ]
  },
  {
    title: "CCC Documentation",
    tag: [
      "Recommended",
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
          "Wallet",
          "TypeScript",
          "JavaScript"
        ],
        description: "CCC Playground is an interactive web IDE for experimenting with CCC and CKB development. Run code, visualize data, and share your experiments instantly—no setup required.",
        link: "https://live.ckbccc.com/",
        llms: "https://context7.com/ckb-devrel/ccc/llms.txt",
        favicon: "https://docs.ckbccc.com/img/favicon.svg"
      },
      {
        title: "CCC - CKBers' Codebase",
        tag: [
          "Recommended",
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
    repo: "https://github.com/cryptape/ckb-script-templates",
    favicon: "https://github.com/cryptape.png"
  },
  {
    title: "ckb-std",
    tag: [
      "Recommended",
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
      "Chinese",
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
    repo: "https://github.com/ckb-js/lumos",
    favicon: "https://github.com/ckb-js.png"
  },
]; 
import { AssetList } from "@initia/initia-registry-types";
const info: AssetList = {
  $schema: "../../assetlist.schema.json",
  chain_name: "inertia_legacy",
  assets: [
    {
      description: "The native token of Initia",
      denom_units: [
        {
          denom:
            "l2/674eeb7eef9e880d6276248fed0e51a10edab5456ba5d580e3040ac545e6103f",
          exponent: 0,
        },
        {
          denom: "INIT",
          exponent: 6,
        },
      ],
      base: "l2/674eeb7eef9e880d6276248fed0e51a10edab5456ba5d580e3040ac545e6103f",
      display: "INIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uinit",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "938",
          },
        },
      ],
      name: "Initia Native Token",
      symbol: "INIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INIT.png",
      },
    },
    {
      description: "USD Coin on Initia",
      denom_units: [
        {
          denom:
            "l2/66bdb58b094314220448b21161be4ddaca99fff19edcb23bb2e7e1967a967e87",
          exponent: 0,
        },
        {
          denom: "USDC",
          exponent: 6,
        },
      ],
      base: "l2/66bdb58b094314220448b21161be4ddaca99fff19edcb23bb2e7e1967a967e87",
      display: "USDC",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "uusdc",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "938",
          },
        },
      ],
      name: "Fake USDC Token",
      symbol: "USDC",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/USDC.png",
      },
    },
    {
      description: "The fake TIA",
      denom_units: [
        {
          denom:
            "l2/2e5e26d78c78b22ec9d034b07b73464c628d74465b094f0191bd8f3108b98140",
          exponent: 0,
        },
        {
          denom: "TIA",
          exponent: 6,
        },
      ],
      base: "l2/2e5e26d78c78b22ec9d034b07b73464c628d74465b094f0191bd8f3108b98140",
      display: "TIA",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "utia",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "938",
          },
        },
      ],
      name: "Fake TIA Token",
      symbol: "TIA",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/TIA.png",
      },
    },
    {
      description: "The fake ETH",
      denom_units: [
        {
          denom:
            "l2/22ce8221d7b1aa2aad20eab5d3ee4a60a74b95b108213c4eb91f5eafc8088f71",
          exponent: 0,
        },
        {
          denom: "ETH",
          exponent: 6,
        },
      ],
      base: "l2/22ce8221d7b1aa2aad20eab5d3ee4a60a74b95b108213c4eb91f5eafc8088f71",
      display: "ETH",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom: "ueth",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "938",
          },
        },
      ],
      name: "Fake ETH Token",
      symbol: "ETH",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ETH.png",
      },
    },
    {
      description: "The native token of Inertia",
      denom_units: [
        {
          denom:
            "l2/b913cb24b9b6748e81809b0889740cb5787986bb3442648a785598f8d0f9e150",
          exponent: 0,
        },
        {
          denom: "INRT",
          exponent: 6,
        },
      ],
      base: "l2/b913cb24b9b6748e81809b0889740cb5787986bb3442648a785598f8d0f9e150",
      display: "INRT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom:
              "move/cb27ce9341af0b9e8ac1a4a83a8788efb9bcc74a41d0cf7c1f44ba3141025484",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "938",
          },
        },
      ],
      name: "INRT",
      symbol: "INRT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INRT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/INRT.png",
      },
    },
    {
      description: "The LST of INIT by Inertia",
      denom_units: [
        {
          denom:
            "l2/a06fa07dcca34e84b22d9ac7f7de08eb73aaef85a2aff5a1e87674722d4b6372",
          exponent: 0,
        },
        {
          denom: "sINIT",
          exponent: 6,
        },
      ],
      base: "l2/a06fa07dcca34e84b22d9ac7f7de08eb73aaef85a2aff5a1e87674722d4b6372",
      display: "sINIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom:
              "move/39be751fb1af0a64eda97ce59f569ef903ac7a90d0d44d40287b059024f363c0",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "938",
          },
        },
      ],
      name: "sINIT",
      symbol: "sINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/sINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/sINIT.png",
      },
    },
    {
      description: "The LST of INIT by Inertia",
      denom_units: [
        {
          denom:
            "l2/237dd87de991c42e7342cca2e8436571778d71d65ae0b5832adcff5515a340d2",
          exponent: 0,
        },
        {
          denom: "nINIT",
          exponent: 6,
        },
      ],
      base: "l2/237dd87de991c42e7342cca2e8436571778d71d65ae0b5832adcff5515a340d2",
      display: "nINIT",
      traces: [
        {
          type: "op",
          counterparty: {
            base_denom:
              "move/9017f312a3df7e612d3ca453bee0bbc6c93b040861d235b8ad0406d3674e1abe",
            chain_name: "initia",
          },
          chain: {
            bridge_id: "938",
          },
        },
      ],
      name: "nINIT",
      symbol: "nINIT",
      coingecko_id: "",
      images: [
        {
          png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/nINIT.png",
        },
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/nINIT.png",
      },
    },
  ],
};
export default info;

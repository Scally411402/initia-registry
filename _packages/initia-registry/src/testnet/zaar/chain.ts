import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "zaar",
  chain_id: "zaar-testnet-5",
  evm_chain_id: 1330587941640993,
  pretty_name: "Zaar",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  website: "https://www.zaar.market",
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: "evm/Bdb128Cf29d40738875297E90aa42772D354c137",
        fixed_min_gas_price: 1000000000,
        low_gas_price: 1000000000,
        average_gas_price: 1000000000,
        high_gas_price: 1000000000,
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc-zaar-testnet-5.anvil.asia-southeast.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-zaar-testnet-5.anvil.asia-southeast.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-zaar-testnet-5.anvil.asia-southeast.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address:
          "https://jsonrpc-zaar-testnet-5.anvil.asia-southeast.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address:
          "wss://jsonrpc-ws-zaar-testnet-5.anvil.asia-southeast.initia.xyz",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/zaar-testnet-5",
      tx_page: "https://scan.testnet.initia.xyz/zaar-testnet-5/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/zaar-testnet-5/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ZAAR.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/ZAAR.png",
  },
  metadata: {
    op_bridge_id: "1048",
    op_denoms: ["uinit"],
    executor_uri:
      "https://opinit-api-zaar-testnet-5.anvil.asia-southeast.initia.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.6.9",
    },
  },
};
export default info;

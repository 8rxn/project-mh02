import { ArweaveWalletKit } from "arweave-wallet-kit";

export default function Template({ children }) {
  return (
    <ArweaveWalletKit
      config={{
        permissions: [
          "ACCESS_ADDRESS",
          "SIGN_TRANSACTION",
          "SIGNATURE",
          "ACCESS_ALL_ADDRESSES",
        ],
        ensurePermissions: true,
      }}
    >
      {children}
    </ArweaveWalletKit>
  );
}

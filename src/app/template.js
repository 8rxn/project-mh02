import { ArweaveWalletKit } from "arweave-wallet-kit";

export default function Template({ children }) {
    return(
    <ArweaveWalletKit
    config={{
      permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION", "SIGNATURE"],
      ensurePermissions: true,
    }}>
        {children}
    </ArweaveWalletKit>
    )
    
  }
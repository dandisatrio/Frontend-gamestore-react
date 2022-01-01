import jwtDecode from "jwt-decode";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}



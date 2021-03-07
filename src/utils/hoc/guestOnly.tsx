import { React } from "@ungap/global-this";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuthContext from "../hooks/useAuthContext";

/** Redirects to homepage when user is logged in. */
function guestOnly<Props>(Component: React.FC<Props>): React.FC<{}> {
  const GuestOnly: React.FC<Props> = (props) => {
    const router = useRouter();
    const { customer } = useAuthContext();

    useEffect(() => {
      // Redirect to homepage when user is logged in.
      if (customer) {
        router.push("/");
      }
    }, []);

    // Prevent flash of page content during redirections.
    if (customer) {
      return null;
    }

    return <Component {...props} />;
  };
  return GuestOnly;
}

export default guestOnly;
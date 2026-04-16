"use client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

function Logout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMesg = null;
    if (!errorMesg) {
      toast.success("You have logout successfully");
      router.push("./");
    } else {
      toast.error("Loggout faild");
    }
    setLoading(false);
  };
  return (
    <Button onClick={handleLogout} className="w-24" variant="outline">
      {loading ? <Loader2 className="animate-spin" /> : "logout"}
    </Button>
  );
}

export default Logout;

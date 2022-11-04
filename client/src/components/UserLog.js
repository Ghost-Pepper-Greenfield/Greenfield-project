import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
const [data, setData] = useState(null);
const [uid, setUid] = useState("");
const [user, loading, error] = useAuthState(auth);
const navigate = useNavigate();

export default function UserLog() {
  const fetchUid = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setUid(data.uid);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  const getData = async () => {
    await axios
      .get(`/${uid}/sessions`)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/database");
    fetchUid();
  }, [user, loading]);

  useEffect(() => {
    getData();
  });

  // Test to see if getData / axios get is successful
  console.log(data);
}

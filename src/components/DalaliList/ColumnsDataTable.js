import React, { useState, useEffect, useMemo } from "react";
import ListOfDalali from "./ListOfDalali";
import { url, requests, utils } from "helpers";

function ColumnsDataTable() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setLoading(true);
    // GET dalali details from API
    try {
      const res = await requests.get(url.dalali.listing);
      // results.map((detail) => ({
      //   id: detail.post.owner_profile.id,

      //   full_name: detail.owner_profile.full_name,

      //   business_category_name:
      //     detail.post.owner_profile.business_category_name,

      //   biography: detail.post.owner_profile.biography,
        
      //   photos: detail.post.photos.length,
      // }));
      console.log("XXXX", res.results);
      setResults(res.results);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, []);

  const columns = React.useMemo(() => [
    {
      Header: "No.",
      Footer: "No.",
      accessor: "post.owner_profile.id",
      disableFilters: true,
      sticky: "left",
    },
    {
      Header: "Username",
      Footer: "Username",
      accessor: "post.owner_profile.full_name",
      sticky: "left",
    },
    {
      Header: "Business Category",
      Footer: "Business Category",
      accessor: "post.owner_profile.business_category_name",
      sticky: "left",
    },
    {
      Header: "Contact",
      Footer: "Contact",
      // accessor: "utils.truncate({text: post.owner_profile.biography, size:34})",
      accessor: "post.owner_profile.biography",
      sticky: "left",
    },
    {
      Header: "Posts",
      Footer: "Posts",
      accessor: "post.photos.length",
      sticky: "left",
    },
  ]);

  if (results.length === 0 && !loading) {
    return (
      <div className="text-center">Dalalis' details are not yet available</div>
    );
  }

  return (
    <div className="text-center">
      {loading && <span>L o a d i n g...</span>}
      <ListOfDalali columns={columns} data={results} />
    </div>
  );
}

export default ColumnsDataTable;

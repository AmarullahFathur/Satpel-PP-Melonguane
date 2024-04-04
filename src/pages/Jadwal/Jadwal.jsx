import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Table from "../../components/Table";
import { Box, Tab, Tabs } from "@mui/material";
import {
  jadwalMarambe,
  jadwalLabuhanHaji,
  jadwalWatunapato,
  jadwalBawal,
  jadwalTarusi,
} from "./JadwalKapal/data";
import { columnsMarambe, columnsLabuhanHaji } from "./JadwalKapal/column";

const Jadwal = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = (scrollOffset) => () => {
    const tabsContainer = document.querySelector(".MuiTabs-root");
    if (tabsContainer) {
      tabsContainer.scrollLeft += scrollOffset;
    }
  };

  const kapal = [
    "KMP. Marambe",
    "KMP. Labuhan Haji",
    "KMP. Watunapato",
    "KMP. Bawal",
    "KMP. Tarusi",
  ];

  const getTable = (value) => {
    switch (value) {
      case 0:
        return <Table columns={columnsMarambe} data={jadwalMarambe} />;
      case 1:
        return <Table columns={columnsLabuhanHaji} data={jadwalLabuhanHaji} />;
      case 2:
        return <Table columns={columnsLabuhanHaji} data={jadwalWatunapato} />;
      case 3:
        return <Table columns={columnsLabuhanHaji} data={jadwalBawal} />;
      case 4:
        return <Table columns={columnsLabuhanHaji} data={jadwalTarusi} />;
    }
  };

  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-start w-full p-8 md:p-16">
      <div className="flex">
        <h1 className="w-full font-semibold text-3xl col-span-3 text-center my-5">
          INFORMASI JADWAL PELAYARAN
        </h1>
      </div>
      <div className="shadow-md p-5 rounded-md">
        <p className="text-slate-500 mt-5">
          Informasi pelayaran dapat berubah sewaktu-waktu, mohon cek informasi
          secara berkala
        </p>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            marginTop: 5,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="kapal tabs"
            variant="scrollable"
          >
            {kapal.map((item, index) => (
              <Tab label={item} key={index} />
            ))}
          </Tabs>
        </Box>
        {getTable(value)}
      </div>
    </div>
  );
};

export default Jadwal;

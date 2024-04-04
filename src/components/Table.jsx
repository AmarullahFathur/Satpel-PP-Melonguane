import React from "react";
import { MaterialReactTable } from "material-react-table";

const Table = (props) => {
  return (
    <MaterialReactTable
      columns={props.columns}
      data={props.data}
      toggleFilter={false}
      enableColumnFilters={false}
      enableFullScreenToggle={false}
      enableDensityToggle={false}
      enableHiding={false}
      muiTableBodyRowProps={{
        sx: () => ({
          verticalAlign: "top",
        }),
      }}
      muiBottomToolbarProps={{
        sx: (theme) => ({
          borderRadius: 0,
          backgroundColor: "transparent",
          "& .MuiSelect-select": {
            marginTop: "8px",
          },
        }),
      }}
      muiTopToolbarProps={{
        sx: (theme) => ({
          padding: 3,
          borderRadius: 100,
        }),
      }}
      muiTableHeadCellProps={{
        sx: (theme) => ({
          fontWeight: "bold",
          borderBottom: "2px solid #C0C0C0",
          paddingX: 3,
        }),
      }}
      muiTableBodyCellProps={{
        sx: (theme) => ({
          borderBottom: "1px solid rgba(224,224,224,0.5)",
          paddingY: 2,
          paddingX: 3,
        }),
      }}
      muiTablePaperProps={{
        elevation: 0,
        sx: {
          borderRadius: 0,
        },
      }}
      muiTableBodyProps={{
        sx: {
          overflow: "hidden",
        },
      }}
    />
  );
};

export default Table;

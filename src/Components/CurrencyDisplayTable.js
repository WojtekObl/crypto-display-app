import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 70, format: (value) => `$${value}` },
  {
    id: "price",
    label: "Price",
    minWidth: 80,
    align: "right",
    format: (value) => `$${value}`,
  },
  {
    id: "marketCap",
    label: "Market Cap",
    minWidth: 130,
    align: "right",
    format: (value) => `$${value}`,
  },
  {
    id: "volume",
    label: "Volume(24h)",
    minWidth: 130,
    align: "right",
    format: (value) => `$${value}`,
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "700px",
    marginTop: "35px"
  },
  container: {
    maxHeight: 440,
  },
});

const createData = (Currency) => {
  const price = Number(Math.round(Currency.quote.USD.price + "e2") + "e-2");
  const volume = Number(
    Math.round(Currency.quote.USD.volume_24h + "e2") + "e-2"
  );
  const marketCap = Number(
    Math.round(Currency.quote.USD.market_cap + "e2") + "e-2"
  );
  const name = `${Currency.name}, ${Currency.symbol}`;

  const key = Currency.id;

  return { key, name, price, marketCap, volume };
};

export default function StickyHeadTable({ currencyToDisplay }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rows = Object.values(currencyToDisplay).map((Currency) =>
    createData(Currency)
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

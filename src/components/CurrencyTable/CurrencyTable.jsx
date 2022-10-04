import React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./CurrencyTable.css";
import { useDispatch, useSelector } from "react-redux";
import { actionTable } from "../../redux/table/action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

function CurrencyTable() {
  const dispatch = useDispatch();
  const { table } = useSelector((state) => state.table);

  useEffect(() => {
    dispatch(actionTable.getTable());
  }, []);
  return (
    <TableContainer component={Paper} className='table_container'>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Наименование</StyledTableCell>
            <StyledTableCell align='left'>Цена</StyledTableCell>
            <StyledTableCell align='left'>Изменение</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!table
            ? "Загрузка"
            : table.map((i) => (
                <StyledTableRow key={i?.CoinInfo.Id}>
                  <StyledTableCell component='th' scope='row'>
                    <div className='icon_txt'>
                      <img
                        src={`https://www.cryptocompare.com${i?.CoinInfo?.ImageUrl}`}
                        width='40rem'
                      />
                      <div className='name_fullname'>
                        <p className='name'>{i?.CoinInfo.FullName}</p>
                        <p className='fullname'>{i?.CoinInfo.Name}</p>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    ${i?.RAW?.USD.PRICE}
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    {i?.RAW?.USD.CHANGEPCT24HOUR.toFixed(2) >= 0 ? (
                      <p className='green'>
                        ↑ {i?.RAW?.USD.CHANGEPCT24HOUR.toFixed(2)}%
                      </p>
                    ) : (
                      <p className='red'>
                        ↓ {i?.RAW?.USD.CHANGEPCT24HOUR.toFixed(2)}%
                      </p>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CurrencyTable;

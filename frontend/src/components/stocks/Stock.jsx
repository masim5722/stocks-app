import React from "react"
import {
    Button,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select, TablePagination,
    TextField,
    Typography
} from "@material-ui/core";
import Chart from "react-apexcharts";
import useStyles from "../loader/styles";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import dayjs from "dayjs";

const StockView = (props) => {
    let classes = useStyles()

    let {
        options,
        series,
        formData,
        setFormData,
        handleFilter,
        pagination,
        handleChangePage,
        handleChangeRowsPerPage
    } = props
    return (
        <Grid container>
            <Grid lg={12}>
                <Typography variant={"h4"} weight="medium">
                    Stocks
                </Typography>
                <Divider />
            </Grid>

            <Grid lg={6} className={classes.mbt2}>
                <FormControl className={classes.mr2}>
                    <TextField
                        id="filled-basic"
                        value={formData.symbol}
                        label="Symbol"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => {setFormData.setSymbol(e.target.value)}}
                        variant="standard"
                    />
                </FormControl>

                <FormControl className={classes.mr2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Date"
                            inputFormat="yyyy-MM-dd"
                            value={formData.date}
                            onChange={(newDate) => {setFormData.setDate(dayjs(newDate).format('YYYY-MM-DD'))}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>

                <FormControl>
                    <Button variant="contained" className={classes.filterButton}  size="large" onClick={handleFilter}>Filter</Button>
                </FormControl>
            </Grid>
            <Grid lg={6} className={[classes.mbt2, classes.textAlignRight]}>
                <FormControl>
                    <InputLabel id="sorting-label">Sort By</InputLabel>
                    <Select
                        labelId="sorting-label"
                        id="sorting"
                        value={formData.sorting}
                        label="Sort By"
                        onChange={(e) => {setFormData.setSorting(e.target.value)}}
                    >
                        {
                            formData.sortingOptions.map((options) =>
                                <MenuItem value={options}>{options}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid lg={12}>
                <Chart options={options} series={series} type="candlestick" height={550} />
            </Grid>
            <Grid lg={12} className={classes.textAlignRight}>
                <TablePagination
                    count={pagination.count}
                    page={pagination.page}
                    onPageChange={handleChangePage}
                    rowsPerPage={pagination.rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
}

export default StockView

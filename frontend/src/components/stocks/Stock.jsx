import React from "react"
import {
    Box,
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
import {Autocomplete, createFilterOptions} from "@mui/material";

const StockView = (props) => {
    let classes = useStyles()

    let {
        options,
        series,
        formData,
        setFormData,
        pagination,
        handleChangePage,
        handleChangeRowsPerPage,
        stockSymbols,
        handleAutoCompleteSymbol
    } = props

    const filterOptions = createFilterOptions({
        limit: 10,
    });
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
                    <Autocomplete
                        filterOptions={filterOptions}
                        id="symbol"
                        sx={{ width: 300 }}
                        options={stockSymbols}
                        autoComplete
                        getOptionLabel={(option) => option.symbol}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                {option.symbol}
                            </Box>
                        )}
                        onChange={(event, newValue)=> newValue && newValue.symbol && setFormData.setSymbol(newValue.symbol)}
                        onInputChange={(event, newInputValue) => {
                            handleAutoCompleteSymbol(newInputValue)
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Search Symbol" fullWidth autoComplete={false}/>
                        )}
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
            </Grid>
            <Grid lg={6} className={[classes.mbt2, classes.textAlignRight]}>
                <FormControl className={classes.sortField}>
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

import React, {useEffect, useState} from "react"
import StockView from "./Stock";
import {getStocks, getSymbols} from "../../services/api";
import {useDispatch} from "react-redux";
import {toggleLoader} from "../../redux/actions/loaderAction";
import dayjs from "dayjs";

/**
 * Smart/Container component for Stocks
 * @returns {JSX.Element}
 * @constructor
 */
const Stock = () =>{
    let [count, setCount] = useState(0)
    let [rowsPerPage, setRowsPerPage] = useState(25)
    let [page, setPage] = useState(0)

    let [stocks, setStocks] = useState([])
    let [symbol, setSymbol] = useState("")
    let [stockSymbols, setStockSymbols] = useState([])
    let [date, setDate] = useState("2021-06-15")
    let [sorting, setSorting] = useState("---------") // default sorting by close descending
    let [sortingOptions, setSortingOptions] = useState([
        '---------',
        'Open Ascending',
        'Open Descending',
        'Close Ascending',
        'Close Descending',
        'High Ascending',
        'High Descending',
        'Low Ascending',
        'Low Descending'
    ])

    const formData = {symbol, date, sortingOptions, sorting}
    const setFormData = {setSymbol, setDate, setSorting}
    const pagination = {count, rowsPerPage, page}

    // redux
    const dispatch = useDispatch()

    /**
     * Refining sorting value according to the api
     * @returns {string}
     */
    const refineSorting = () =>{
        switch (sorting){
            case 'Open Ascending':
                return 'open'
            case 'Open Descending':
                return '-open'
            case 'Close Ascending':
                return 'close'
            case 'Close Descending':
                return '-close'
            case 'High Ascending':
                return 'high'
            case 'High Descending':
                return '-high'
            case 'Low Ascending':
                return 'low'
            case 'Low Descending':
                return '-low'
            default:
                return ''
        }
    }
    /**
     * function to create api url
     * on the basis of filtering and sorting
     * @returns {string}
     */
    const createStockListUrl = () =>{
        let apiBaseUrl = 'http://127.0.0.1:8000/api/stocks/list/?ordering='+refineSorting()
        const nextPage = Number(pagination.page) + Number(1)
        if(date){
            apiBaseUrl = apiBaseUrl+'&date='+date
        }
        if(symbol){
            apiBaseUrl = apiBaseUrl+'&symbol='+symbol
        }

        return apiBaseUrl+'&page='+nextPage+'&page_size='+rowsPerPage
    }

    /**
     * Function to fetch stocks data
     */
    const fetchStocksData = () =>{
        // showing loader
        dispatch(toggleLoader({isLoading: true}))
        // api call
        const url = createStockListUrl()
        getStocks(url).then((response) =>{
            // response && setStocks(response)
           if(response){
               setCount(response.count)

               let array =[]
               if(response && response.results){
                   response.results.forEach((item) =>{
                       array.push({
                           x: new Date(item.date),
                           y: [item.open, item.high, item.low, item.close, item.symbol]
                       })
                   })
                   setStocks(array)
                   // hiding loader
                   dispatch(toggleLoader({isLoading: false}))
               }
           }
        })
        .catch((error) =>{
            // hiding loader
            dispatch(toggleLoader({isLoading: false}))
            console.log(error)
        })
    }

    /**
     * Function to fetch stocks data
     */
    const fetchStockSymbol = (symbolValue) =>{
        // showing loader
        dispatch(toggleLoader({isLoading: true}))
        // api call
        const url = "http://127.0.0.1:8000/api/stocks/symbols/?search="+symbolValue
        getSymbols(url).then((response) =>{
            response && setStockSymbols(response)
            dispatch(toggleLoader({isLoading: false}))
        })
        .catch((error) =>{
            console.log(error)
            // hiding loader
            dispatch(toggleLoader({isLoading: false}))
        })
    }

    /**
     * changing page
     * @param event
     * @param newPage
     */
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    /**
     * Handle rows change per page value
     * @param event
     */
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0)
    };

    /**
     * Handle autocomplete symbol
     * @param event
     */
    const handleAutoCompleteSymbol = (symbolValue) => {
        symbolValue && fetchStockSymbol(symbolValue)
    };

    // calling API on component mount
    useEffect(()=>{
        // calling api to fetch stocks list
        fetchStocksData()
    },[])

    // this will call when sorting value is changed
    useEffect(() =>{
        fetchStocksData()
    }, [sorting, date])

    // this will call when sorting value is changed
    useEffect(() =>{
        symbol && symbol!== '' && fetchStocksData()
    }, [symbol])

    // this will call when page value is changed
    useEffect(() =>{
        fetchStocksData()
    }, [page, rowsPerPage])

    // graph options
    const options = {
        chart: {
            height: 450,
            type: 'candlestick',
        },
        title: {
            text: 'Stock graph',
            align: 'left'
        },
        annotations: {
            xaxis: [
                {
                    x: '',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396'
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test'
                    }
                }
            ]
        },
        tooltip: {
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                let data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                return '<ul>' +
                    '<li><b>Symbol</b>: ' + data.y[4] + '</li>' +
                    '<li><b>Open</b>: ' + data.y[0] + '</li>' +
                    '<li><b>High</b>: ' + data.y[1] + '</li>' +
                    '<li><b>Low</b>: ' + data.y[2] + '</li>' +
                    '<li><b>Close</b>: ' + data.y[3] + '</li>' +
                    '</ul>';
            }
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (val) {
                    return dayjs(val).format('MMM DD')
                }
            }
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }

    // graph data
    const series =  [{
            name: 'stocks',
            data: stocks
    }]

    return <StockView
        options={options}
        series={series}
        formData={formData}
        setFormData={setFormData}
        pagination={pagination}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        stockSymbols={stockSymbols}
        handleAutoCompleteSymbol={handleAutoCompleteSymbol}
    />
}

export default Stock
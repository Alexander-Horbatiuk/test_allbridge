import React, {useState} from "react";
import "./style.css"

let data;
data = {
    coins: [
        {logo: 'https://app.allbridge.io/assets/chain-icons/binance.png', nameCoin: 'Binance Smart Chain'},
        {logo: 'https://app.allbridge.io/assets/chain-icons/ethereum.png', nameCoin: 'Ethereum'},
        {logo: 'https://app.allbridge.io/assets/chain-icons/huobi.png', nameCoin: 'Huobi ECO Chain'},
        {logo: 'https://app.allbridge.io/assets/chain-icons/polygon.png', nameCoin: 'Polygon (Matic)'},
        {logo: 'https://app.allbridge.io/assets/chain-icons/solana.png', nameCoin: 'Solana'}
    ]
}

const CoinData = (props) => {
    let {stateCount, setStateCount, closeModalFunc} = props;

    function onSelect(index) {
        stateCount = setStateCount(stateCount + index);

        closeModalFunc()
    }

    const coinsData = data.coins.map((coin, index) => {
        return (
            <li key={index}
                className="coinLi"
                onClick={onSelect}
            >
                <img src={data.coins[index].logo} alt="logo" className="coinImg"/>
                <p className="coinName">{data.coins[index].nameCoin} </p>
            </li>
        )
    })

    return (
        <>
            {coinsData}
        </>
    )
}

export default CoinData;
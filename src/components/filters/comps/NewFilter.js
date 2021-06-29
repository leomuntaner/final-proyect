import React, { useRef, useState } from 'react';

const url = "http://localhost/php-proyecto/newFilter.php";

const sendUserData = async (url, data) => {
        console.log(data)
        const resp = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
        });
        const json = await resp.json();
        return json;
}


const NewFilter = (props) => {

        const [wait, setWait] = useState(false);

        const refFilterName = useRef(null);
        const refCandleConfirmation = useRef(null);
        const refResistence = useRef(null);
        const refOnlyLong = useRef(null);
        const refOnlyShort = useRef(null);
        const refRsi = useRef(null);
        const refMacd = useRef(null);
        const refIchimokuCloud = useRef(null);
        const refMovingAverage = useRef(null);
        const refExponentialMA = useRef(null);
        const refRetest = useRef(null);
        let saved = false;

        const handleCreate = async () => {
                saved = true;
                setWait(true);
                const userData = {
                        "filterName": refFilterName.current.value,
                        "candleConfirmation": refCandleConfirmation.current.value,
                        "resistence": refResistence.current.checked,
                        "onlyLong": refOnlyLong.current.checked,
                        "onlyShort": refOnlyShort.current.checked,
                        "rsi": refRsi.current.checked,
                        "macd": refMacd.current.checked,
                        "ichimokuCloud": refIchimokuCloud.current.checked,
                        "movingAverage": refMovingAverage.current.checked,
                        "exponentialMA": refExponentialMA.current.checked,
                        "retest": refRetest.current.checked

                };
                const respJson = await sendUserData(url, userData);
                console.log("respuesta", respJson);

        }


        return (
                <div className="create-filter">
                        <h1> CREATE NEW FILTER</h1><br />
                        <form className="">
                                <input type="text"
                                        placeholder="filterName"
                                        aria-label="filterName"
                                        ref={refFilterName} />
                                <div className="newFilterR">
                                        <input type="number"
                                                placeholder="CandleConfirmation"
                                                id="CandleConfirmation"
                                                aria-label="CandleConfirmation"
                                                ref={refCandleConfirmation} /><br />
                                        <h3>Resistence</h3>
                                        <input type="radio"
                                                id="Resistence"
                                                aria-label="Resistence"
                                                ref={refResistence} />
                                        <h3>OnlyLong</h3>
                                        <input type="radio"
                                                placeholder="OnlyLong"
                                                id="OnlyLong"
                                                aria-label="OnlyLong"
                                                ref={refOnlyLong} />
                                        <h3>OnlyShort</h3>
                                        <input type="radio"
                                                placeholder="OnlyShort"
                                                id="OnlyShort"
                                                aria-label="OnlyShort"
                                                ref={refOnlyShort} />
                                        <h3>Rsi</h3>
                                        <input type="radio"
                                                placeholder="Rsi"
                                                id="Rsi"
                                                aria-label="Rsi"
                                                ref={refRsi} />
                                </div>
                                <div className="newFilterL">

                                        <h3>Macd</h3>
                                        <input type="radio"
                                                placeholder="Macd"
                                                id="Macd"
                                                aria-label="Macd"
                                                ref={refMacd} />
                                        <h3>IchimokuCloud</h3>
                                        <input type="radio"
                                                placeholder="IchimokuCloud"
                                                id="IchimokuCloud"
                                                aria-label="IchimokuCloud"
                                                ref={refIchimokuCloud} />
                                        <h3>MovingAverage</h3>
                                        <input type="radio"
                                                placeholder="MovingAverage"
                                                id="MovingAverage"
                                                aria-label="MovingAverage"
                                                ref={refMovingAverage} />
                                        <h3>ExponentialMA</h3>
                                        <input type="radio"
                                                placeholder="ExponentialMA"
                                                id="ExponentialMA"
                                                aria-label="ExponentialMA"
                                                ref={refExponentialMA} />
                                        <h3>Retest</h3>
                                        <input type="radio"
                                                placeholder="Retest"
                                                id="Retest"
                                                aria-label="Retest"
                                                ref={refRetest} />
                                </div>

                                <br /><br />
                                <button className='enter'
                                        onClick={handleCreate}
                                        disabled={wait}>SUBMIT
                                </button>
                        </form>

                        {() => { if (saved) { (<h2>Filter created successfully</h2>) }}}
                </div>
        )
}

export default NewFilter;

/*

*/
import notifyicon from '../../assets/img/notification-icon.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";

function SalesCard() {

    const [initialDate, setInitialDate] = useState(
        new Date(new Date().setDate(new Date().getDate() - 365))
    );

    const [finalDate, setFinalDate] = useState(new Date());

    return (

        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                   <DatePicker
                       selected={initialDate}
                       onChange={(dateParam: Date) => setInitialDate(dateParam)}
                       className="dsmeta-form-control"
                       dateFormat={"dd/MM/yyyy"}
                   />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={finalDate}
                        onChange={(dateParam: Date) => setFinalDate(dateParam)}
                        className="dsmeta-form-control"
                        dateFormat={"dd/MM/yyyy"}
                    />
                </div>
            </div>

            {/*STATIC DATA GRID*/}

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendedor</th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="show992">#341</td>
                        <td className="show576">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <div className="dsmeta-red-btn">
                                    <img src={notifyicon} alt="Notificar"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#341</td>
                        <td className="show576">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <div className="dsmeta-red-btn">
                                    <img src={notifyicon} alt="Notificar"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#341</td>
                        <td className="show576">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show992">15</td>
                        <td className="show992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <div className="dsmeta-red-btn">
                                    <img src={notifyicon} alt="Notificar"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default SalesCard;

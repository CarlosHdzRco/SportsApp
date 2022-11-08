import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import ButtonWrapper from './ButtonWrapper';

export default function DonateButton() {
    return (
       <div
            style={{ maxWidth: "750px", minHeight: "200px" }}
       >
           <PayPalScriptProvider
               options={{
                   "client-id": "AQfIgXVw1rBUW1_6Vg26UebCjEyw06_9U5aqjMSGe5GCuxw6Qy0lomExTRceU3nA5Bn-iJpZzUgx5Di5",
                   components: "buttons",
                   currency: "USD"
                //    SameSite:'None'
               }}
           >
               <ButtonWrapper
                   currency={"USD"}
               />
           </PayPalScriptProvider>
       </div>
   );
}
import ButtonStatePayment, { ButtonStatePaymentProps } from "../buttons/button.state.payment"
import CardStatePayment, { CardStatePaymentProps } from "../cards/card.state.payment"
import LinkStatePayment from "../links/link.state.pyment"

export type StructureStatePaymentProps = {
    cardStatePayment:CardStatePaymentProps;
    buttonStatePayment:ButtonStatePaymentProps;
}

const StructureStatePayment = (props:StructureStatePaymentProps):React.JSX.Element => {

    return<>
    
        <section className="w-[100%] p-1 flex flex-col justify-center items-center">
            <span className="card-stat-payment mt-4 mb-4 w-[100%] flex items-center justify-center">
                <CardStatePayment
                    state={props.cardStatePayment.state}
                    id={props.cardStatePayment.id}
                    provider={props.cardStatePayment.provider}
                    status={props.cardStatePayment.status}
                    amount={props.cardStatePayment.amount}
                    preferenceId={props.cardStatePayment.preferenceId}
                    color={props.cardStatePayment.color}
                />
            </span>

            <span className="button-state-payment  mt-4 mb-4  w-[100%] flex items-center justify-center">
                <ButtonStatePayment
                    state={props.buttonStatePayment.state}
                    color={props.buttonStatePayment.color}
                />
            </span>

            <span className="link-state-payment  mt-4 mb-4  w-[100%] flex items-center justify-center">
                <LinkStatePayment/>
            </span>

        </section>
    </>
}

export default StructureStatePayment;
import { ResultSuccess } from "../../components/result-success";
import { SalesRegistrationForm } from "../../components/user/sales-registration-form"
import { useRegistration } from "../../hooks/user/mutations/useRegistration";

export const SalesRegistration: React.FC = () => {
    const { registerToSeller, isSuccess } = useRegistration();

    return (
        <div className="card-sales-registration">
            <h2>Sales Registration</h2>
            {isSuccess ? <ResultSuccess /> : <SalesRegistrationForm registerToSeller={registerToSeller} />}
        </div>
    )
}

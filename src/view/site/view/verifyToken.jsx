import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link, useHistory } from 'react-router-dom';
import { pages } from "links/pages";

import { getVerifyToken } from '../service';

const schema = yup.object({
    verifyCode: yup.string().required("Token cannot be blank"),
});

const VerifyToken = () => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    if (!history.location.state) {
        history.push(pages.FORGOT_PASSWORD);
        return <></>;
    }
    const { id, email } = history.location.state;

    const onSubmitHandler = async (fdata) => {
        await getVerifyToken({ ...fdata, id }).then(({ flag, message, data }) => {
            if (flag == true) {
                enqueueSnackbar("Token verified", {
                    variant: 'success',
                });
                history.push({
                    pathname: pages.NEW_PASSWORD,
                    state: {
                        ...fdata,
                        id,
                        email,
                    }
                });
            } else {
                enqueueSnackbar(message, {
                    variant: 'error',
                });
            }
        });
    }

    return (
        <div className="ui card">
            <h2 className="header">Verify your token?</h2>
            <h4>Enter the token to change your password</h4>
            <form className="ui form" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="field">
                    <label>Code</label>
                    <Controller
                        name="verifyCode"
                        control={control}
                        render={({ field, fieldState }) => {
                            return (
                                <>
                                    <input {...field} error={fieldState.invalid} />
                                    <span>{fieldState.error?.message}</span>
                                </>
                            )
                        }}
                    />
                </div>
                <div>
                    <button type="submit" className="ui button primary">
                        Submit
                    </button>
                </div>
                <div>
                    <div>
                        Remembered password?&nbsp;
                        <Link
                            to={pages.LOGIN}
                        >
                            Login Here
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default VerifyToken;
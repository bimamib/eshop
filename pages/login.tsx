import Layout from '../layouts/main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 

type LoginMail = {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: LoginMail) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password
    });

    console.log(res);
  };

  return (
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/"legacyBehavior >
              <a><i className="icon-left"></i> Kembali ke halaman utama</a>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Masuk</h2>
            <p className="form-block__description">Silahkan Memasukkan Email dan Password disini</p>
            
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  placeholder="Email" 
                  type="text" 
                  name="email"
                  {...register('login', { required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                />
                
                {/* {errors.email && errors.email.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                } */}

                {/* {errors.email && errors.email.type === 'pattern' && 
                  <p className="message message--error">Please write a valid email</p>
                } */}
              </div>
              
              <div className="form__input-row">
                <input 
                  className="form__input" 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  // ref={register({ required: true })}
                  {...register('test', { required: true })}
                />
                {/* {errors.password && errors.password.type === 'required' && 
                  <p className="message message--error">This field is required</p>
                } */}
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                    <input 
                      type="checkbox" 
                      name="keepSigned" 
                      id="check-signed-in" 
                      // ref={register({ required: false })}
                      {...register('test', { required: true })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Biarkan saya tetap masuk</p>
                  </label>
                </div>
                <a href="/forgot-password" className="form__info__forgot-password">Lupa Password?</a>
              </div>

              {/* <div className="form__btns">
                <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
                <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
              </div> */}

              <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Masuk</button>

              <p className="form__signup-link">Belum mempunyai akun? <a href="/register">Daftar</a></p>
            </form>
          </div>

        </div>
      </section>
  )
}
  
export default LoginPage
  
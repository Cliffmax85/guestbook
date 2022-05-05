

export default function Login() {
    return(
        <>
          <form>
              <label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder="Enter Email"
                  />
                  <input
                    id='password'
                    name='password'
                    type='password'
                    placeholder="Enter Password"
                  />
              </label>
          </form>
        </>
    );
}
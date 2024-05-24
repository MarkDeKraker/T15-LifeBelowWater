import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

type FormValues = {
  loginCode: string;
};

function QuizLogin() {
  // Id wordt gebruikt om bij de juiste quiz te komen, maar is nu nog niet geïmplementeerd. Title ka ook een manier zijn om de juiste quiz te vinden.
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <>
      <section className=" bg-gray-50 font-custom">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <h1 className="h-8 mr-2 font-custom">Aqua Academy Quiz</h1>
          </a>
          <div className="w-full shadow rounded-custom bg-primary/5 md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="px-6 pt-3 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Begin de quiz!
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="input-group"></div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Jouw inlogcode{" "}
                    {errors.loginCode && (
                      <span className="font-bold text-red-800 ">
                        : {errors.loginCode?.message}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-custom focus:ring-primary focus:border-primary-600 block w-full p-2.5 "
                    placeholder="bxf23i4"
                    {...register("loginCode", {
                      required: {
                        value: true,
                        message: "logincode is verplicht",
                      },
                      minLength: {
                        value: 3,
                        message: "Moet minimaal 3 karakters bevatten",
                      },
                      maxLength: 80,
                    })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-custom text-sm px-5 py-2.5 text-center "
                >
                  Start quiz
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizLogin;

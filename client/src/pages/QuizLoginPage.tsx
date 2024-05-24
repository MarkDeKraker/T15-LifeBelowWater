import { SubmitHandler, useForm } from "react-hook-form";
import { redirect, useParams } from "react-router-dom";
import H1 from "../components/typography/H1";

type FormValues = {
  slug: string;
};

function QuizLoginPage() {
  // Id wordt gebruikt om bij de juiste quiz te komen, maar is nu nog niet geïmplementeerd. Title ka ook een manier zijn om de juiste quiz te vinden.
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log({ data });
    redirect(`/quiz/${data.slug}`);
  };

  return (
    <>
      <section className=" bg-gray-50 font-custom">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full shadow rounded-custom bg-primary/5 md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="px-6 pt-3 space-y-4 md:space-y-6 sm:p-8">
              <H1>Begin de quiz!</H1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Jouw inlogcode{" "}
                    {errors.slug && (
                      <span className="font-bold text-red-800 ">
                        : {errors.slug?.message}
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

export default QuizLoginPage;

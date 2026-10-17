import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";
import { useAuth } from "../hooks/AuthHook";

const Register = () => {

  const {register, registerUser, handleSubmit, errors, navigate, watch} = useAuth()

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="bg-orange-500 text-white p-2.5 rounded-xl">
            <BriefcaseBusiness size={25} />
          </div>
          <span className="text-2xl font-bold text-gray-900">
            Interview<span className="text-orange-500">Tracker</span>
          </span>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Create your account
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Organize your applications and ace your next interview.
            </p>
          </div>

          <form onSubmit={handleSubmit(registerUser)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full name
              </label>
              <div className="relative">
                <UserRound
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  {...register('name', {
                    required: 'Name is required.'
                  })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                />
                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  {...register('password', {
                    required: 'Password is required.',
                    minLength: {
                      value: 6,
                      message: "Password must be atleast 6 characters long."
                    }
                  })}
                  type="password"
                  placeholder="Create a password"
                  className="w-full pl-11 pr-11 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                />
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  {...register('confirmPassword', {
                    required: 'Confirm Password field is required.',
                    validate: (value)=>{
                      return value === watch("password") || "Passwords doesn't match"
                    }
                  })}
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full pl-11 pr-11 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                />
                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}

              </div>
            </div>

          
            <button
              type="submit"
              className="w-full cursor-pointer flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition shadow-sm shadow-orange-100"
            >
              Create account
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <button
              onClick={()=>{navigate('/auth')}}
              className="text-orange-600 cursor-pointer font-semibold hover:text-orange-700"
            >
              Sign in
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
'use client'

import { useForm } from 'react-hook-form';
import classnames from 'classnames';

// Import server action and use it in onSubmit below

export default function EmployeeForm({ formSubmitFunction }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    await formSubmitFunction(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-6 flex flex-col items-end justify-between gap-y-4'>
      {/* FIRST NAME */}
      <div className='flex items-center justify-between gap-x-4 w-full'>
        <label className='w-1/4' htmlFor='first_name'>First Name</label>
        <input
          id="first_name"
          {...register("first_name", {
            required: "First name is required.",
            minLength: {
              value: 6,
              message: "Cannot be less than 6 characters",
            },
            maxLength: {
              value: 10,
              message: "Cannot be more than 10 characters",
            },
            pattern: {
              value: /^[a-zA-Z ]*$/,
              message: "Must only contain letters"
            }
          })}
          className={classnames(
            'p-2 border-b-2 border-slate-400 focus:outline-none focus:border-purple-400 hover:border-purple-300 bg-slate-100 w-3/4',
            errors.first_name && "border-red-400 focus:border-red-400"
          )}
          placeholder='Lindsay'
          title={errors.first_name?.message}
        />
      </div>
      {errors.first_name && (<p className='text-xs text-red-400'>{errors.first_name?.message}</p>)}

      {/* LAST NAME */}
      <div className='flex items-center justify-between gap-x-4 w-full'>
        <label className='w-1/4' htmlFor='last_name'>Last Name</label>
        <input
          id="last_name"
          {...register("last_name", {
            required: "Last name is required.",
            minLength: {
              value: 6,
              message: "Cannot be less than 6 characters",
            },
            maxLength: {
              value: 10,
              message: "Cannot be more than 10 characters",
            },
            pattern: {
              value: /^[a-zA-Z ]*$/,
              message: "Must only contain letters"
            }
          })}
          className={classnames(
            'p-2 border-b-2 border-slate-400 focus:outline-none focus:border-purple-400 hover:border-purple-300 bg-slate-100 w-3/4',
            errors.last_name && "border-red-400"
          )}
          placeholder='Herman'
          title={errors.first_name?.message}
        />
      </div>
      {errors.last_name && (<p className='text-xs text-red-400'>{errors.last_name?.message}</p>)}

      {/* EMAIL */}
      <div className='flex items-center justify-between gap-x-4 w-full'>
        <label className='w-1/4' htmlFor='email'>Email</label>
        <input
          id="email" {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: "Must be a valid email address"
            }
          })}
          className={classnames(
            'p-2 border-b-2 border-slate-400 focus:outline-none focus:border-purple-400 hover:border-purple-300 bg-slate-100 w-3/4',
            errors.email && "border-red-400"
          )}
          placeholder='john@doe.com'
          title={errors.email?.message}
        />
      </div>
      {errors.email && (<p className='text-xs text-red-400'>{errors.email?.message}</p>)}

      {/* NUMBER */}
      <div className='flex items-center justify-between gap-x-4 w-full'>
        <label className='w-1/4' htmlFor='number'>Phone</label>
        <input
          id="number"
          {...register("number", {
            minLength: {
              value: 12,
              message: "Should be 12 characters, including country code (+94)"
            },
            maxLength: {
              value: 12,
              message: "Should be 12 characters, including country code (+94)"
            },
            pattern: {
              value: /^\+94[0-9]+/i,
              message: "Should be a valid LK Phone number"
            }
          })}
          className={classnames(
            'p-2 border-b-2 border-slate-400 focus:outline-none focus:border-purple-400 hover:border-purple-300 bg-slate-100 w-3/4',
            errors.number && "border-red-400"
          )}
          placeholder='+94123456789'
          title={errors.number?.message}
        />
      </div>
      {errors.number && (<p className='text-xs text-red-400'>{errors.number?.message}</p>)}

      {/* GENDER */}
      <div className='flex items-center justify-between gap-x-4 w-full'>
        <label className='w-1/4' htmlFor='gender'>Gender</label>
        <select
          id="gender"
          {...register("gender")}
          className={classnames(
            'p-3 focus:outline-purple-400 hover:border-purple-300 bg-slate-100 w-3/4',
            errors.gender && "border-red-400"
          )}
          title={errors.gender?.message}
        >
          <option value="">Select One</option>
          <option value="F">Female</option>
          <option value="M">Male</option>
        </select>
      </div>
      {errors.gender && (<p className='text-xs text-red-400'>{errors.gender?.message}</p>)}

      <input type="submit" className='mt-6 px-6 py-2 border border-purple-400 rounded text-purple-400 font-bold hover:text-white hover:bg-purple-400 focus:outline-purple-400 focus:bg-purple-400 focus:text-white' />
    </form>
  )
}

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const DailyCheckIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) =>
    fetch('http://127.0.0.1:8000/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data),
    })

  if (isSubmitSuccessful) {
    alert('You have successfully logged your symptoms.')
    navigate('/dashboard')
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ category: '', experienced_today: '', severity: '', sleep: '' })
    }
  }, [formState, reset])

  return (
    <div className='form-wrapper'>
      <h1>Log your symptoms today</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <select
            defaultValue=''
            id='category'
            label='Categories'
            {...register('category', {
              required: 'Error: Selecting a category is required',
            })}
          >
            <option value='' disabled>
              Select your symptom
            </option>
            <option value='PAIN'>Pain</option>
            <option value='FATIGUE'>Fatigue</option>
          </select>
          <p>{errors.category?.message}</p>
        </div>

        <div>
          <label htmlFor='experienced_today'>
            Did you experience this symptom today?
          </label>
          <select
            defaultValue=''
            id='experienced_today'
            label='Experienced'
            {...register('experienced_today', {
              required:
                'Error: Selecting whether you experienced the symptom today is required',
            })}
          >
            <option value='' disabled>
              Yes or No
            </option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <p>{errors.experienced_today?.message}</p>
        </div>

        <div>
          <label htmlFor='experienced_today'>
            How severe was the symptom today?
          </label>
          <select
            defaultValue=''
            id='severity'
            label='Severity'
            {...register('severity', {
              required: 'Error: Selecting the severity is required',
            })}
          >
            <option value='' disabled>
              -
            </option>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
          <p>{errors.severity?.message}</p>
        </div>

        <div>
          <label htmlFor='sleep'>How much sleep did you get in hours?</label>
          <div>
            <input type='number' size='10' id='sleep' {...register('sleep')} />
          </div>
        </div>
        <br></br>

        <div>
          <label htmlFor='author'>Who are you?</label>
          <select
            defaultValue='1'
            id='author'
            label='Author'
            {...register('author', {
              required: 'Error: Selecting the author is required',
            })}
          >
            <option value='1'>User 1</option>
          </select>
          <p>{errors.author?.message}</p>
        </div>

        <input type='submit' />
      </form>
    </div>
  )
}

export default DailyCheckIn

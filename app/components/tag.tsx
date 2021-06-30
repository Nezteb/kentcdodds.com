import * as React from 'react'
import clsx from 'clsx'
import type {ChangeEventHandler} from 'react'
import {CustomCheckboxContainer, CustomCheckboxInput} from '@reach/checkbox'

interface TagProps {
  tag: string
  selected: boolean
  onClick?: ChangeEventHandler<HTMLInputElement>
}

function Tag({tag, selected, onClick}: TagProps) {
  return (
    // Ignore the a11y error, as CustomCheckboxInput renders the <input> inside
    // this <label>, which the linter doesn't see.
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <CustomCheckboxContainer
        checked={selected}
        onChange={onClick}
        className={clsx(
          'relative block ml-4 mt-4 px-6 py-3 w-auto h-auto rounded-full focus-within:outline-none transition ring-gray-200 dark:ring-gray-600 dark:ring-offset-gray-900 ring-offset-white ring-offset-4 focus-within:ring-2',
          {
            'text-black dark:text-white bg-gray-100 dark:bg-gray-800':
              !selected,
            'text-white dark:text-black bg-gray-800 dark:bg-gray-100': selected,
          },
        )}
      >
        <CustomCheckboxInput
          checked={selected}
          value={tag}
          className="sr-only"
        />
        <span>{tag}</span>
      </CustomCheckboxContainer>
    </label>
  )
}

export {Tag}

import React from 'react';

type Props = {
  languageAName: string;
  languageBName: string;
  languageAValue: string;
  languageBValue: string;
};

export const TranslationCard: React.FC<Props> = ({
  languageAName,
  languageBName,
  languageAValue,
  languageBValue,
}) => (
  <div className='rounded-lg border-2 border-gray-200 bg-gray-50 p-8 shadow'>
    <p className='text-xl font-semibold tracking-wide text-gray-400'>
      {languageAName}
    </p>
    <p className='mt-2 text-lg text-gray-700'>{languageAValue}</p>

    <div className='my-5 h-0.5 bg-gray-200' />

    <p className='text-xl font-semibold tracking-wide text-gray-400'>
      {languageBName}
    </p>
    <p className='mt-2 text-lg text-gray-700'>{languageBValue}</p>
  </div>
);

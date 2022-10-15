import React, { Component } from 'react';
const methods = Object.freeze({
  methodgood: 'good',
  methodneutral: 'neutral',
  methodbad: 'bad',
});
export const FeedbackOptions = ({ options }) => {
  return (
    <>
      <button onClick={() => options(methods.methodgood)}>good</button>
      <button onClick={() => options(methods.methodneutral)}>neutral</button>
      <button onClick={() => options(methods.methodbad)}>bad</button>
    </>
  );
};

import React from 'react'
import { Link } from 'react-router'

import CaretRightSvg from '../svgs/caret-right.svg'

export const Text = () => (
  <div className='footer__text'>
    <div className='footer__text__item'>
      A joint website of MoveOn.org Civic Action and MoveOn.org Political
      Action. MoveOn.org Political Action and MoveOn.org Civic Action and are
      separate organizations.
    </div>
    <div className='footer__text__item'>
      <Link to='http://civic.moveon.org/'>MoveOn.org Civic Action</Link> is a
      501(c)(4) organization which primarily focuses on nonpartisan education
      and advocacy on important national issues.
      <Link
        to='https://civic.moveon.org/donatec4/creditcard.html?cpn_id=511'
        className='footer__text__cta'
      >
        Donate to MoveOn Civic Action
        <CaretRightSvg />
      </Link>
    </div>
    <div className='footer__text__item'>
      <Link to='http://pol.moveon.org/'>MoveOn.org Political Action</Link> is a
      federal political committee which primarily helps members elect candidates
      who reflect our values through a variety of activities aimed at
      influencing the outcome of the next election.
      <Link
        to='https://act.moveon.org/donate/pac-donation'
        className='footer__text__cta'
      >
        Donate to MoveOn Political Action
        <CaretRightSvg />
      </Link>
    </div>
  </div>
)

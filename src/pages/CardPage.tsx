import React, { FC } from 'react'
import Card, { CardVariant } from '../components/Card';

export const CardPage: FC = () => {
  return (
    <div>
      <Card
        width="400px"
        height="400px"
        cursor="pointer"
        title="не нажимай!"
        variant={CardVariant.outlined}
        onClick={(num) => {
          alert(`${num} секунд без проишествий на странице`);
        }}
      >
        <img
          src="https://i.pinimg.com/474x/b5/12/42/b51242fccb4c559383eee0fe0295eeaf.jpg"
          alt=""
        />
        <h1 style={{ color: "white" }}>Mike Wazovski</h1>
      </Card>
    </div>
  )
}

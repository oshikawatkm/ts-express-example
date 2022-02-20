import { get } from 'config';
import { connect } from 'mongoose';
import winston from 'winston';

export function connectDB() {
  const db: string = get('mongodUrl');
  connect(db, {userNewUrlParser: true})
    .then(() => {
      winston.info(`Connected to database...`);
    })
    .catch(error => {
      winston.error('faild to connect', error)
    })
}
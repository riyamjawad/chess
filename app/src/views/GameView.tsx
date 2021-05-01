import React from 'react';
import { Box } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { BoardProps } from '../types/Board';
import { PlayerBar } from '../components/game/PlayerBar';
import { GameBoard } from '../components/game/GameBoard';
import { Snackbar } from '../components/common/Snackbar';
import { User } from '../types/User';
import { Overview } from '../components/game/Overview';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'linear-gradient(180deg, #918F99 14.58%, #28262F 79.69%)',
      zIndex: 0,
    },
    container: {
      zIndex: 1,
      position: 'relative',
      height: `calc(100% - ${theme.spacing(3)}px)`,
      paddingTop: theme.spacing(1),
    },
  })
);

interface Props {
  boardProps: BoardProps;
  topTime: number;
  botTime: number;
  player: {
    name: string;
    email: string;
    countryCode: string;
    rating: number;
    playerIsWhite: boolean;
  };
  previousPlayer: string;
  currentMove: number;
  handleResign: () => void;
  isPaused: boolean;
  isBlinking: boolean;
}

export const GameView = (props: Props) => {
  const classes = useStyles();
  console.log(props.previousPlayer);
  return (
    <>
      <Snackbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        justifyContent="space-between"
        className={classes.container}
      >
        <Overview
          currentPlayerIsHuman={props.currentMove % 2 === 1}
          currentMove={props.currentMove}
          handleResign={props.handleResign}
        />
        <GameBoard {...props.boardProps} />
        <PlayerBar
          time={props.botTime}
          name={props.player.name}
          email={props.player.email}
          countryCode={props.player.countryCode}
          rating={props.player.rating}
          isPaused={props.isPaused}
          isBlinking={props.isBlinking}
          playerIsWhite={props.player.playerIsWhite}
        />
      </Box>
      <Box className={classes.background} />
    </>
  );
};

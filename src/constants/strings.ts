export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Mandou bem!', 'Uiuiui', 'Toma toma']
export const GAME_COPIED_MESSAGE = 'Jogo copiado'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Uh seu tanso'
export const WORD_NOT_FOUND_MESSAGE = 'Não viaja'
export const HARD_MODE_ALERT_MESSAGE =
  'Pra que dificultar??'
export const HARD_MODE_DESCRIPTION =
  'Mesma merda de sempre'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Só us daltônicuU'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era.... ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Tem que usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Presta atenção.. tem que usar ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição'
export const NEW_WORD_TEXT = 'Nova palavra em'
export const SHARE_TEXT = 'Compartilhar'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Taxa de sucesso'
export const CURRENT_STREAK_TEXT = 'Streak atual'
export const BEST_STREAK_TEXT = 'Streak máxima' 

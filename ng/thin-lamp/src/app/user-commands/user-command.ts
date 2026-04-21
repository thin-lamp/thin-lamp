import { UserCommandHandler } from "./user-command-handler";

export interface UserCommand {
    // label of the command button
    label: string,
    // icon of the command button
    icon: () => string,
    // style for the command button
    classes?: () => string,
    // handler of the command button
    handler?: UserCommandHandler
}

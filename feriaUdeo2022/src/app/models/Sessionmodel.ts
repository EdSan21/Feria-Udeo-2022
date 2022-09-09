export class session {
    sessionUser: string;
    sessionId: string;
    sessionName:string;
    sessionImg:string;

    constructor( sessionId = '',sessionUser = '', sessionName='',sessionImg='') {
        this.sessionUser = sessionUser
        this.sessionId = sessionId
        this.sessionName = sessionName
        this.sessionImg = sessionImg
    }
}

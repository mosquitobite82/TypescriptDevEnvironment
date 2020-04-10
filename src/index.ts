import './styles.scss';
export const hello = () => 'Hello World!';

export function alertMe(msg : string, glob : any){
    glob.alert('Boo!');
};
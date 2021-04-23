import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';


import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    }); // Pegar a data atual  
    // EEEEEE - Retornar o ano, d o dia , MMMM só o mês 
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir,sempre</p>

            <span>{currentDate}</span>


        </header>
    );

}
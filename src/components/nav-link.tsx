import { Link, LinkProps, useLocation } from "react-router-dom";

export interface NavLinksProps extends LinkProps {

}
export function NavLink(props: NavLinksProps) {
    const { pathname } = useLocation()

    /* data- é um atributos que podemos colocar nas tags, data- e qualquer nome apos o (-) */
    /* no tailwind podemos recuperar esse valor e assim podemos estilizar a nosso favor */
    return <Link
        data-current={pathname == props.to}
        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-red-400" {...props} />
}
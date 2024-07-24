import { Skeleton } from "@/components/ui/skeleton";

export function MetricCardSkeletom(){
    return(
        <>
            <Skeleton className="h-7 w-36 "/>
            <Skeleton className="h-4 w-52 mt-1" />
        </>
    )
}
// custos.ts
export function calcularCusto(entrada: number, saida: number): number {
   return (entrada / 1000000) * 1.0 + (saida / 1000000) * 5.0;
}
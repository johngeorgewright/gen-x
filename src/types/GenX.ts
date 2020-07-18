import { Operator } from './Operator'

export default interface GenX {
  genX<I, O1>(): (input: I) => AsyncGenerator<O1>

    genX<I, O1>(
      
        operator1: Operator<I, O1>,

    ): (input: I) => AsyncGenerator<O1>

    genX<I, O1, O2>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

    ): (input: I) => AsyncGenerator<O2>

    genX<I, O1, O2, O3>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

    ): (input: I) => AsyncGenerator<O3>

    genX<I, O1, O2, O3, O4>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

    ): (input: I) => AsyncGenerator<O4>

    genX<I, O1, O2, O3, O4, O5>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

    ): (input: I) => AsyncGenerator<O5>

    genX<I, O1, O2, O3, O4, O5, O6>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

    ): (input: I) => AsyncGenerator<O6>

    genX<I, O1, O2, O3, O4, O5, O6, O7>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

    ): (input: I) => AsyncGenerator<O7>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

    ): (input: I) => AsyncGenerator<O8>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

    ): (input: I) => AsyncGenerator<O9>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

    ): (input: I) => AsyncGenerator<O10>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

    ): (input: I) => AsyncGenerator<O11>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

    ): (input: I) => AsyncGenerator<O12>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

    ): (input: I) => AsyncGenerator<O13>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

    ): (input: I) => AsyncGenerator<O14>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

    ): (input: I) => AsyncGenerator<O15>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

    ): (input: I) => AsyncGenerator<O16>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

    ): (input: I) => AsyncGenerator<O17>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

    ): (input: I) => AsyncGenerator<O18>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

    ): (input: I) => AsyncGenerator<O19>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

    ): (input: I) => AsyncGenerator<O20>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

    ): (input: I) => AsyncGenerator<O21>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

    ): (input: I) => AsyncGenerator<O22>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

    ): (input: I) => AsyncGenerator<O23>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

    ): (input: I) => AsyncGenerator<O24>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

    ): (input: I) => AsyncGenerator<O25>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

    ): (input: I) => AsyncGenerator<O26>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

    ): (input: I) => AsyncGenerator<O27>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

    ): (input: I) => AsyncGenerator<O28>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

    ): (input: I) => AsyncGenerator<O29>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

    ): (input: I) => AsyncGenerator<O30>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

    ): (input: I) => AsyncGenerator<O31>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

    ): (input: I) => AsyncGenerator<O32>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

    ): (input: I) => AsyncGenerator<O33>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

    ): (input: I) => AsyncGenerator<O34>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

    ): (input: I) => AsyncGenerator<O35>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

    ): (input: I) => AsyncGenerator<O36>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

    ): (input: I) => AsyncGenerator<O37>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

    ): (input: I) => AsyncGenerator<O38>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

    ): (input: I) => AsyncGenerator<O39>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

    ): (input: I) => AsyncGenerator<O40>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

    ): (input: I) => AsyncGenerator<O41>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

    ): (input: I) => AsyncGenerator<O42>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

    ): (input: I) => AsyncGenerator<O43>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

    ): (input: I) => AsyncGenerator<O44>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

    ): (input: I) => AsyncGenerator<O45>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

    ): (input: I) => AsyncGenerator<O46>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

    ): (input: I) => AsyncGenerator<O47>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

    ): (input: I) => AsyncGenerator<O48>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

    ): (input: I) => AsyncGenerator<O49>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

    ): (input: I) => AsyncGenerator<O50>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

    ): (input: I) => AsyncGenerator<O51>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

    ): (input: I) => AsyncGenerator<O52>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

    ): (input: I) => AsyncGenerator<O53>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

    ): (input: I) => AsyncGenerator<O54>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

    ): (input: I) => AsyncGenerator<O55>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

    ): (input: I) => AsyncGenerator<O56>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

    ): (input: I) => AsyncGenerator<O57>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

    ): (input: I) => AsyncGenerator<O58>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

    ): (input: I) => AsyncGenerator<O59>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

    ): (input: I) => AsyncGenerator<O60>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

    ): (input: I) => AsyncGenerator<O61>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

    ): (input: I) => AsyncGenerator<O62>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

    ): (input: I) => AsyncGenerator<O63>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

    ): (input: I) => AsyncGenerator<O64>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

    ): (input: I) => AsyncGenerator<O65>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

    ): (input: I) => AsyncGenerator<O66>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

    ): (input: I) => AsyncGenerator<O67>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

    ): (input: I) => AsyncGenerator<O68>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

    ): (input: I) => AsyncGenerator<O69>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

    ): (input: I) => AsyncGenerator<O70>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

    ): (input: I) => AsyncGenerator<O71>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

    ): (input: I) => AsyncGenerator<O72>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

    ): (input: I) => AsyncGenerator<O73>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

    ): (input: I) => AsyncGenerator<O74>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

    ): (input: I) => AsyncGenerator<O75>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

    ): (input: I) => AsyncGenerator<O76>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

    ): (input: I) => AsyncGenerator<O77>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

    ): (input: I) => AsyncGenerator<O78>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

    ): (input: I) => AsyncGenerator<O79>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

    ): (input: I) => AsyncGenerator<O80>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

    ): (input: I) => AsyncGenerator<O81>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

    ): (input: I) => AsyncGenerator<O82>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

    ): (input: I) => AsyncGenerator<O83>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

    ): (input: I) => AsyncGenerator<O84>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

    ): (input: I) => AsyncGenerator<O85>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

    ): (input: I) => AsyncGenerator<O86>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

    ): (input: I) => AsyncGenerator<O87>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

    ): (input: I) => AsyncGenerator<O88>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

    ): (input: I) => AsyncGenerator<O89>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

    ): (input: I) => AsyncGenerator<O90>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

    ): (input: I) => AsyncGenerator<O91>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

    ): (input: I) => AsyncGenerator<O92>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92, O93>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

        operator93: Operator<O92, O93>,

    ): (input: I) => AsyncGenerator<O93>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92, O93, O94>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

        operator93: Operator<O92, O93>,

        operator94: Operator<O93, O94>,

    ): (input: I) => AsyncGenerator<O94>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92, O93, O94, O95>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

        operator93: Operator<O92, O93>,

        operator94: Operator<O93, O94>,

        operator95: Operator<O94, O95>,

    ): (input: I) => AsyncGenerator<O95>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92, O93, O94, O95, O96>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

        operator93: Operator<O92, O93>,

        operator94: Operator<O93, O94>,

        operator95: Operator<O94, O95>,

        operator96: Operator<O95, O96>,

    ): (input: I) => AsyncGenerator<O96>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92, O93, O94, O95, O96, O97>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

        operator93: Operator<O92, O93>,

        operator94: Operator<O93, O94>,

        operator95: Operator<O94, O95>,

        operator96: Operator<O95, O96>,

        operator97: Operator<O96, O97>,

    ): (input: I) => AsyncGenerator<O97>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92, O93, O94, O95, O96, O97, O98>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

        operator93: Operator<O92, O93>,

        operator94: Operator<O93, O94>,

        operator95: Operator<O94, O95>,

        operator96: Operator<O95, O96>,

        operator97: Operator<O96, O97>,

        operator98: Operator<O97, O98>,

    ): (input: I) => AsyncGenerator<O98>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92, O93, O94, O95, O96, O97, O98, O99>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

        operator93: Operator<O92, O93>,

        operator94: Operator<O93, O94>,

        operator95: Operator<O94, O95>,

        operator96: Operator<O95, O96>,

        operator97: Operator<O96, O97>,

        operator98: Operator<O97, O98>,

        operator99: Operator<O98, O99>,

    ): (input: I) => AsyncGenerator<O99>

    genX<I, O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17, O18, O19, O20, O21, O22, O23, O24, O25, O26, O27, O28, O29, O30, O31, O32, O33, O34, O35, O36, O37, O38, O39, O40, O41, O42, O43, O44, O45, O46, O47, O48, O49, O50, O51, O52, O53, O54, O55, O56, O57, O58, O59, O60, O61, O62, O63, O64, O65, O66, O67, O68, O69, O70, O71, O72, O73, O74, O75, O76, O77, O78, O79, O80, O81, O82, O83, O84, O85, O86, O87, O88, O89, O90, O91, O92, O93, O94, O95, O96, O97, O98, O99, O100>(
      
        operator1: Operator<I, O1>,

        operator2: Operator<O1, O2>,

        operator3: Operator<O2, O3>,

        operator4: Operator<O3, O4>,

        operator5: Operator<O4, O5>,

        operator6: Operator<O5, O6>,

        operator7: Operator<O6, O7>,

        operator8: Operator<O7, O8>,

        operator9: Operator<O8, O9>,

        operator10: Operator<O9, O10>,

        operator11: Operator<O10, O11>,

        operator12: Operator<O11, O12>,

        operator13: Operator<O12, O13>,

        operator14: Operator<O13, O14>,

        operator15: Operator<O14, O15>,

        operator16: Operator<O15, O16>,

        operator17: Operator<O16, O17>,

        operator18: Operator<O17, O18>,

        operator19: Operator<O18, O19>,

        operator20: Operator<O19, O20>,

        operator21: Operator<O20, O21>,

        operator22: Operator<O21, O22>,

        operator23: Operator<O22, O23>,

        operator24: Operator<O23, O24>,

        operator25: Operator<O24, O25>,

        operator26: Operator<O25, O26>,

        operator27: Operator<O26, O27>,

        operator28: Operator<O27, O28>,

        operator29: Operator<O28, O29>,

        operator30: Operator<O29, O30>,

        operator31: Operator<O30, O31>,

        operator32: Operator<O31, O32>,

        operator33: Operator<O32, O33>,

        operator34: Operator<O33, O34>,

        operator35: Operator<O34, O35>,

        operator36: Operator<O35, O36>,

        operator37: Operator<O36, O37>,

        operator38: Operator<O37, O38>,

        operator39: Operator<O38, O39>,

        operator40: Operator<O39, O40>,

        operator41: Operator<O40, O41>,

        operator42: Operator<O41, O42>,

        operator43: Operator<O42, O43>,

        operator44: Operator<O43, O44>,

        operator45: Operator<O44, O45>,

        operator46: Operator<O45, O46>,

        operator47: Operator<O46, O47>,

        operator48: Operator<O47, O48>,

        operator49: Operator<O48, O49>,

        operator50: Operator<O49, O50>,

        operator51: Operator<O50, O51>,

        operator52: Operator<O51, O52>,

        operator53: Operator<O52, O53>,

        operator54: Operator<O53, O54>,

        operator55: Operator<O54, O55>,

        operator56: Operator<O55, O56>,

        operator57: Operator<O56, O57>,

        operator58: Operator<O57, O58>,

        operator59: Operator<O58, O59>,

        operator60: Operator<O59, O60>,

        operator61: Operator<O60, O61>,

        operator62: Operator<O61, O62>,

        operator63: Operator<O62, O63>,

        operator64: Operator<O63, O64>,

        operator65: Operator<O64, O65>,

        operator66: Operator<O65, O66>,

        operator67: Operator<O66, O67>,

        operator68: Operator<O67, O68>,

        operator69: Operator<O68, O69>,

        operator70: Operator<O69, O70>,

        operator71: Operator<O70, O71>,

        operator72: Operator<O71, O72>,

        operator73: Operator<O72, O73>,

        operator74: Operator<O73, O74>,

        operator75: Operator<O74, O75>,

        operator76: Operator<O75, O76>,

        operator77: Operator<O76, O77>,

        operator78: Operator<O77, O78>,

        operator79: Operator<O78, O79>,

        operator80: Operator<O79, O80>,

        operator81: Operator<O80, O81>,

        operator82: Operator<O81, O82>,

        operator83: Operator<O82, O83>,

        operator84: Operator<O83, O84>,

        operator85: Operator<O84, O85>,

        operator86: Operator<O85, O86>,

        operator87: Operator<O86, O87>,

        operator88: Operator<O87, O88>,

        operator89: Operator<O88, O89>,

        operator90: Operator<O89, O90>,

        operator91: Operator<O90, O91>,

        operator92: Operator<O91, O92>,

        operator93: Operator<O92, O93>,

        operator94: Operator<O93, O94>,

        operator95: Operator<O94, O95>,

        operator96: Operator<O95, O96>,

        operator97: Operator<O96, O97>,

        operator98: Operator<O97, O98>,

        operator99: Operator<O98, O99>,

        operator100: Operator<O99, O100>,

    ): (input: I) => AsyncGenerator<O100>

}

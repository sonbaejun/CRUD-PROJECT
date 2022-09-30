let double x = 2 * x
let add1 x = x + 1
let zero = 0
let my = (double (double (add1 (double (add1 (double (add1 (double (add1 (double (add1
(double (add1 (double (add1 (double (add1 (double (double (add1 zero))))))))))))))))))))
let my2 = (double (add1 (double (double (double (double (add1 (double (add1
(double (add1 (double (add1 (double (add1 (double (add1 zero)))))))))))))))))
printfn "%d%d"  my2 my;;
for (;;) function inFor();
{}

for (const key in object) function inForIn();
{}

for (const value of values) function inForOf();
{}

while (condition) function inWhile();
{}

label: function inLabel();
{}

if (condition) function inConsequent();
{}

if (condition) useConsequent(); else function inAlternate();
{}

if (condition) function beforeElse(); else useAlternate();
{}

for (;;) while (condition) function nested();
;;
{}

do function inDoWhile(); while (condition);
{}

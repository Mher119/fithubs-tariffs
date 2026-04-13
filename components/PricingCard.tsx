"use client";

interface PlanProps {
  plan: {
    id: string | number;
    period: string;
    price: number | string;
    full_price: number | string;
    is_best: boolean;
    text: string;
  };
  isMain?: boolean;
  isExpired: boolean;
  selected: boolean;
  onSelect: () => void;
}

export default function PricingCard({
  plan,
  isMain,
  isExpired,
  selected,
  onSelect,
}: PlanProps) {
  const currentPrice = isExpired ? Number(plan.full_price) : Number(plan.price);
  const oldPrice = Number(plan.full_price);
  const discount = Math.round(100 - (Number(plan.price) * 100) / oldPrice);

  const isForever =
    plan.id === 4 || plan.period.toLowerCase().includes("навсегда");

  return (
    <div
      onClick={onSelect}
      className={`relative cursor-pointer transition-all duration-300 rounded-[28px] overflow-visible border-2 flex bg-[#2D3233] w-full ${
        selected
          ? "border-[#FDB056] z-10 shadow-lg shadow-[#FDB056]/10"
          : "border-white/10 hover:border-white/20"
      } ${
        isMain
          ? "md:flex-row items-center justify-between min-h-[110px] md:min-h-[130px] p-5 md:px-10"
          : `md:flex-col items-center justify-between p-4 ${
              isForever ? "md:min-h-[150px]" : "md:min-h-[220px]"
            }`
      }`}
    >
      {/* Discount Badge */}
      <div
        className={`absolute left-auto md:left-[30px] md:right-auto bg-[#FD5656] text-white rounded-b-lg z-20 px-2 py-1 flex items-center justify-center w-[41px] min-w-[40px] transition-all duration-500 
    ${isExpired ? "opacity-0 -translate-y-full" : "opacity-100"}
    ${
      isMain
        ? "top-0 right-14" // «Навсегда»- remain in the same position, while others move up
        : "-top-[1.6px] right-8" // other plans - move up to the same position as the main plan's badge
    }`}
      >
        <span className="text-[12px] md:text-sm font-bold leading-none whitespace-nowrap">
          -{discount}%
        </span>
      </div>

      {isMain && (
        <div className="absolute top-1 right-6 text-[#fd972e] text-[10px] font-medium uppercase tracking-widest opacity-80">
          хит!
        </div>
      )}

      {/* --- MOBILE VIEW --- */}
      <div className="flex md:hidden w-full items-center justify-between mt-4 px-1">
        <div className="flex flex-col items-start leading-none min-w-[120px]">
          <p className="font-medium text-[14px] text-white/90 mb-3 first-letter:uppercase lowercase">
            {plan.period}
          </p>
          <div className="flex flex-col items-end">
            <div
              className={`flex items-baseline ${isMain ? "text-[#fd972e]" : "text-white"}`}
            >
              <span className="font-[900] text-3xl">{currentPrice}</span>
              <span className="ml-1.5 font-[900] text-xl">₽</span>
            </div>
            {!isExpired && (
              <div className="relative mt-1 text-gray-500 text-[13px] flex items-center">
                <span className="relative">
                  {oldPrice} ₽
                  <span className="absolute left-0 top-1/2 w-full h-[1.2px] bg-gray-500 -translate-y-1/2"></span>
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 max-w-[140px] ml-4">
          <p className="text-[11px] text-gray-400 leading-snug text-left font-medium">
            {plan.id === 1 || plan.period.toLowerCase().includes("1 неделя") ? (
              "Чтобы просто начать"
            ) : plan.id === 2 ||
              plan.period.toLowerCase().includes("1 месяц") ? (
              <>
                Получить <br /> первые <br /> результаты
              </>
            ) : plan.id === 3 ||
              plan.period.toLowerCase().includes("3 месяца") ? (
              <>
                Привести тело <br /> в порядок
              </>
            ) : isForever ? (
              <>
                Всегда <br /> быть в форме
              </>
            ) : (
              plan.text
            )}
          </p>
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex w-full items-center justify-between h-full">
        {isMain ? (
          <>
            <div className="flex flex-col flex-1 items-center justify-center">
              <p className="font-medium text-lg text-white mb-1 first-letter:uppercase lowercase">
                {plan.period}
              </p>
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <span
                    className={`font-[900] text-5xl ${isExpired ? "text-white" : "text-[#fd972e]"}`}
                  >
                    {currentPrice}
                  </span>
                  <span
                    className={`ml-3 font-[900] text-4xl ${isExpired ? "text-white" : "text-[#fd972e]"}`}
                  >
                    ₽
                  </span>
                </div>
                {!isExpired && (
                  <div className="text-gray-400 text-lg line-through self-end -mt-1">
                    {oldPrice} ₽
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-[45%] justify-center px-4 border-white/5">
              <p className="text-[13px] text-gray-400 leading-tight">
                {plan.text}
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center w-full h-full justify-between">
            <div className="mt-9 text-center font-medium text-[15px] text-gray-100 first-letter:uppercase lowercase">
              {plan.period}
            </div>

            <div className="flex flex-col items-center justify-center flex-grow py-2">
              <div className="flex items-center text-white">
                <span className="font-[900] text-2xl">{currentPrice}</span>
                <span className="ml-2 font-[900] text-2xl">₽</span>
              </div>
              {!isExpired && (
                <div className="relative self-end text-gray-400 text-[11px] flex items-center">
                  <span className="relative">
                    {oldPrice} ₽
                    <span className="absolute left-0 top-1/2 w-full h-[1px] bg-gray-500 -translate-y-1/2"></span>
                  </span>
                </div>
              )}
            </div>

            {!isForever && (
              <div className="h-[35px] pb-1 w-full flex justify-start pl-1">
               
                <div className="max-w-[130px]">
                  <p className="text-[10px] text-gray-500 text-left leading-tight font-medium">
                    {plan.id === 1 ||
                    plan.period.toLowerCase().includes("1 неделя") ? (
                      "Чтобы просто начать"
                    ) : plan.id === 2 ||
                      plan.period.toLowerCase().includes("1 месяц") ? (
                      <>
                        Чтобы получить <br /> первые результаты
                      </>
                    ) : plan.id === 3 ||
                      plan.period.toLowerCase().includes("3 месяца") ? (
                      <>
                        Привести тело <br /> в порядок
                      </>
                    ) : (
                      plan.text
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}



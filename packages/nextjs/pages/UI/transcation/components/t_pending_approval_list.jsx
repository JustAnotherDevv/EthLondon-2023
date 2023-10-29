
export default function TPendingApprovalList() {
  function handleApproval() {}
  const escrowID = "0x34aA3F359A9D614239015126635CE7732c18fDF3";
  return (
    <div className="flex flex-row place-content-between collapse px-5 py-3 shadow-sm ">
      <div className="w-20 text-ellipsis text-sm truncate ">{p_address}</div>
      <div className="flex flex-row ">
        <div class="grid h-10 w-10 flex-grow card bg-base-300 rounded-none place-items-center" onClick={handleApproval}>
          YES
        </div>
        <div class="divider divider-horizontal p-0  text-xs font-thin"></div>
        <div class="grid h-10 w-10 flex-grow card bg-base-300 rounded-none place-items-center">NO</div>
      </div>
    </div>
  );
}
